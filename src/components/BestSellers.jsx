import SellerComponent from "@/components/SellerComponent.jsx";

export default function BestSellers({sells}) {

    const data = [
        { title:'Computers / General', amount: (sells * 0.3) },
        { title:'Education / General', amount: (sells * 0.2) },
        { title:'Computers / Networking / General', amount: (sells * 0.15) },
        { title:'Business & Economics / Advertising & Promotion', amount: (sells * 0.1) },
    ];
    return (
        <>
            <p className="text-xl text-center mb-5 font-semibold">Categorías más compradas</p>
            <div>

            {data.map((item, index) => (
                <SellerComponent key={index} title={item.title} amount={Math.floor(item.amount/130)}/>
            ))}
            </div>
        </>
    );
}