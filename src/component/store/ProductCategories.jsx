import { Form } from "react-bootstrap";

function ProductCategories({
  selectedCategories,
  setSelectedCategories,
  categoryList,
}) {
  const handleCategoryChange = (category, isChecked) => {
    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };
  return (
    <>
      {
        <Form>
          {categoryList.map((category) => (
            <Form.Check
              inline
              key={category}
              type="checkbox"
              id={category}
              label={category}
              checked={selectedCategories.includes(category)}
              onChange={(e) => handleCategoryChange(category, e.target.checked)}
            />
          ))}
        </Form>
      }
    </>
  );
}

export default ProductCategories;
