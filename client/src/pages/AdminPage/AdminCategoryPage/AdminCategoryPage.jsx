import { useEffect, useState } from "react";
import { request } from "../../../utils/request";
import {Input, Button, H2, PrivateContent} from '../../../components'
import { ROLE } from "../../../constans";
import { checkAccess } from "../../../utils";
import { selectUserRole } from "../../../selectors";
import { useSelector } from "react-redux";
import { AllCategoryGroup, ActionGroup, CategoryTable, CategoryRow } from "./style";

export const AdminCategoryPage = () => {
    const [categories, setCategories] = useState([])
    const [newCategory, setNewCategory] = useState('')
    const [error, setError] = useState(null)
    const userRole = useSelector(selectUserRole)

    const fetchCategories = async () => {
        try {
            const res = await request('/categories')
            setCategories(res.data)
        } catch (err) {
            setError(err.message)
        }
    }
    useEffect(() => {
        if (!checkAccess([ROLE.ADMIN], userRole)) 
            return;
        fetchCategories();
    }, [userRole])

    const handleCreate = async () => {
        if (!newCategory.trim())
            return
        
        try {
            await request('/categories', 'POST', { name: newCategory })
            setNewCategory('')
            fetchCategories()
        } catch (err) {
            setError(err.message)
        }
    }

    const handleDelete = async (id) => {
        try {
            await request(`/categories/${id}`, 'DELETE')
            fetchCategories()
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <AllCategoryGroup>
        <PrivateContent access={[ROLE.ADMIN]} serverError={error}>
                <H2>Категории товаров</H2>
                <ActionGroup>
                    <Input
                        placeholder="Новая категория"
                        value={newCategory}
                        onChange={(event) => setNewCategory(event.target.value)}
                        />
                        <Button onClick={handleCreate} height="48px">Добавить новую категорию</Button>
                </ActionGroup>
                <CategoryTable>
                 
                    {categories.map(({ id, name }) => (
                        <CategoryRow key={id}>
                        <div>{name}</div>
                        <div>
                            <Button variant='danger' onClick={() => handleDelete(id)} >
                            Удалить
                            </Button>
                        </div>
                        </CategoryRow>
                    ))}
                
                </CategoryTable>
        </PrivateContent>
        </AllCategoryGroup>
    )
}