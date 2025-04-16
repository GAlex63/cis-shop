import { useState } from "react";

const useValidation = () => {
  const [errors, setErrors] = useState({});

  const validate = (field, value) => {
    let errorMessage = "";

    switch (field) {
      case "img_url":
        if (!value) {
          errorMessage = "Это поле обязательно.";
        }
        break;
      case "title":
        if (!value) {
          errorMessage = "Это поле обязательно.";
        }
        break;

      case "price":
        if (!value) {
          errorMessage = "Это поле обязательно.";
        } else if (isNaN(Number(value)) || Number(value) <= 0) {
          errorMessage = "Должно быть положительным числом.";
        }
        break;

      case "category":
        if (!value.trim()) {
          errorMessage = "Это поле обязательно.";
        } else if (!/^[a-zA-Zа-яА-Я\s]+$/.test(value)) {
          errorMessage = "Категория должна содержать только буквы.";
        }
        break;

      case "desc":
        if (!value.trim()) {
          errorMessage = "Это поле обязательно.";
        }
        break;

      default:
        if (!value.trim()) {
          errorMessage = "Это поле обязательно.";
        }
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: errorMessage }));
  };

  const validateAll = (formData) => {
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      validate(field, formData[field]);
      if (errors[field]) {
        newErrors[field] = errors[field];
      }
    });
    return newErrors;
  };

  return { errors, validate, validateAll };
};

export default useValidation;
