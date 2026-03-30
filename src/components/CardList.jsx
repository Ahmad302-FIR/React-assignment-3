import React from "react";
import Card from "./Card";

function CardList() {
  return (
    <div className="card-container">
      
      <Card
        image="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?semt=ais_hybrid&w=740&q=80"
        title="Web Development"
        description="Learn HTML, CSS and JavaScript fundamentals."
      />

      <Card
        image="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?semt=ais_incoming&w=740&q=80"
        title="Mobile Development"
        description="Build Android and iOS applications."
      />

      <Card
        image="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
        title="UI/UX Design"
        description="Design beautiful and user-friendly interfaces."
      />

    </div>
  );
}

export default CardList;