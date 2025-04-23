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

  useEffect(() => {
    request(
      `/products?search=${searchPhrase}&page=${page}&limit=${PAGINATION_LIMIT}`
    ).then(({ data: { products, lastPage } }) => {
      setProducts(products);
      setFilteredProducts(products);
      setLastPage(lastPage);
    });
  }, [page, shouldSearch]);

  const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value);
    startDelayedSearch(!shouldSearch);
  };

  const filterByCategory = (category) => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === category
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
          <SidebarItem onClick={() => filterByCategory("radiators")}>
            Радиаторы
          </SidebarItem>
          <SidebarItem onClick={() => filterByCategory("boilers")}>
            Водонагреватели
          </SidebarItem>
          <SidebarItem onClick={() => filterByCategory("valves")}>
            Запорная арматура
          </SidebarItem>
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
