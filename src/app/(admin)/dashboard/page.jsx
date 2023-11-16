import DashboardDataCart from "@/components/DashboardDataCart.jsx";
import LastOrders from "@/components/lastOrders.jsx";
import BestSellers from "@/components/BestSellers.jsx";
import Image from "next/image";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Uso de la función para generar un número aleatorio entre 1 y 10


export default function Dashboard() {
  const libros = getRandomInt(1, 5000);
  const stock = getRandomInt(1, 5000);
  const dinero = getRandomInt(6000, 20000);
  const cancelado = getRandomInt(1, 200);
  const pendientes = getRandomInt(1, 100);
  const completados = getRandomInt(60, 500);
  const data = [
    { title: "Libros vendidos", num: libros },
    { title: "total de ventas", num: "$" + dinero },
    { title: "Libros en stock", num: stock },
    { title: "Pedidos cancelados", num: cancelado },
    { title: "Pedidos pendientes", num: pendientes },
    { title: "Pedidos completados", num: completados },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5">
      <div className="lg:col-span-4 lg:px-7">
        <p className="text-xl text-center mb-5 font-semibold">Resumen</p>
        <div className="grid gird-cols-1 md:grid-cols-3">
          {data.map((item, index) => (
            <DashboardDataCart key={index} title={item.title} num={item.num} />
          ))}
        </div>
        <div className="mt-10">
          <LastOrders />
        </div>
      </div>
      <div>
        <BestSellers sells={dinero} />

        <div>
          <p className="text-xl text-center mb-3 font-semibold">Gráfico de ganancias</p>
          <Image src={'/chart.png'} width={1000} height={1000} alt="chart"></Image>
        </div>
      </div>
    </div>
  );
}
