import SellerComponent from "@/components/SellerComponent.jsx";

export default function BestSellers({sells}) {

    const data = [
        { title:'Computers / General', amount: (sells * 0.4) },
        { title:'Education / General', amount: (sells * 0.3) },
        { title:'Computers / Networking / General', amount: (sells * 0.15) },
        { title:'Business & Economics / Advertising & Promotion', amount: (sells * 0.07) },
    ];
    return (
        <>
            <p className="text-xl text-center mb-5">Categorías más compradas</p>
            <div>

            {data.map((item, index) => (
                <SellerComponent key={index} title={item.title} amount={Math.floor(item.amount/100)}/>
            ))}
            </div>
        </>
    );
}