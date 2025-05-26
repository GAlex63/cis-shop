import { useMemo, useEffect, useState } from "react";
import { request } from "../../utils/request";
import { PAGINATION_LIMIT } from "../../constans";

import {
  Block,
  CatalogContainer,
  Item1,
  Item2,
  MainContent,
  ProductGrid,
  Sidebar,
  SidebarItem,
} from "./style";
import { ProductCard } from "../../components/product-card/ProductCard";
import { Pagination, Search } from "../../components";
import { debounce } from "../../utils";

export const CatalogPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(2);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [shouldSearch, setShouldSearch] = useState(false);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    request(
      `/products?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`
    ).then(({ data: { products, lastPage } }) => {
      console.log('products', products)
      setProducts(products);
      setFilteredProducts(products);
      setLastPage(lastPage);
    });
  }, [page, shouldSearch]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/categories')
        if (!response.ok) {
          throw new Error('Ошибка получения категорий')
        }
        const data = await response.json()
        // console.log(data)
        setCategories(data.data)
      } catch (error) {
        console.error('Ошибка:', error)
      }
    }
    fetchCategories()
  }, [])

  const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value);
    startDelayedSearch(!shouldSearch);
  };

  const filterByCategory = (categoryId) => {
    if (categoryId === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => String(product.category_id) === String(categoryId)
      );
      setFilteredProducts(filtered);
    }
  };

  

  return (
    <CatalogContainer>
      <Sidebar>
        <ul>
          <SidebarItem onClick={() => filterByCategory("all")}>
            Все товары
          </SidebarItem>
          {categories.map((category) => (
            <SidebarItem key={category.id} onClick={() => filterByCategory(category.id)}>
              {category.name}
            </SidebarItem>
          ))}
        </ul>
      </Sidebar>
      <MainContent>
        <div>
          <Search onChange={onSearch} searchPhrase={searchPhrase} />
        </div>
        <Block>
          <Item1>
            {filteredProducts.length > 0 ? (
              <ProductGrid>
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </ProductGrid>
            ) : (
              <div>Ничего не нашлось</div>
            )}
          </Item1>

          <Item2>
            {lastPage > 1 && products.length > 0 && (
              <Pagination page={page} lastPage={lastPage} setPage={setPage} />
            )}
          </Item2>
        </Block>
      </MainContent>
    </CatalogContainer>
  );
};
