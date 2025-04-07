const Products = ({ userData }: any) => {
  console.log(userData);

  return (
    <div>
      Products
      <p>{userData?.name}</p>
      <p>{userData?.name}</p>
    </div>
  );
};

export default Products;
