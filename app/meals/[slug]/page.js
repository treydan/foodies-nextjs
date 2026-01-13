const MealDetailPage = ({ params: { slug } }) => {
  return (
    <div>
      <h1>Meal Details</h1>
      <p>Here you can find more information about the meal: {slug}</p>
    </div>
  );
};

export default MealDetailPage;
