import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const [productData, setProductData] = useState([]);
  //   axios call
  const getData = async (e) => {
    await axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        // getting data
        setProductData(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //   loading data
  useEffect(() => {
    getData();
    AOS.init();
  }, []);

  //   Bar chart title and other options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        // display: true,
        text: "Mobile phones price",
      },
    },
  };
  //   data for bar chart
  const data = {
    labels: productData
      .filter((data) => data.id <= 10)
      .map((productData) => productData.title),
    datasets: [
      {
        label: "Smart Phones",
        data: productData
          .filter((data) => data.id <= 10)
          .map((productData) => productData.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-[100%] flex justify-center mb-40">
      <div className="w-[90%]" data-aos="zoom-in" data-aos-duration="1500">
        <Bar className="h-40 w-40" options={options} data={data} />
      </div>
    </div>
  );
}

export default Chart;
