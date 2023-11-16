export default function SellerComponent({title, amount}) {
    return (
        <>
            <div className="block w-full h-min p-4 bg-white border border-gray-200 rounded-lg shadow mb-5">

                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{title}</h5>

                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: `${amount}%`}}> {amount}%</div>
                </div>

            </div>
        </>
    );
}