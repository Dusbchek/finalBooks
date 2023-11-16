import TableRow from '@/components/tableRow.jsx';
export default function LastOrders() {

    const data = [
        { book: 'python', name: 'Asa Abshire', address: '975 Pablo Alley', quantity: '5', total: '582.86', status: 'red', textStatus: 'Cancelada', },
        { book: 'Networking', name: 'Neil Keeling', address: '953 Douglas Village', quantity: '5', total: '951.79', status: 'green', textStatus: 'Completada', },
        { book: 'Full Stack FastAPI', name: 'Bernita Leffler', address: '183 Buck Unions', quantity: '1', total: '129.00', status: 'yellow', textStatus: 'Pendiente', },
        { book: 'HTML 5', name: 'Dedrick Stracke', address: '6312 Wisozk Spur', quantity: '6', total: '240.14', status: 'purple', textStatus: 'Enviada', },
        { book: 'SQL para Principiantes', name: 'Jay Klein', address: '7342 Furman Stravenue', quantity: '4', total: '820.85', status: 'green', textStatus: 'Completada', },
        { book: 'React', name: 'Elinore Block', address: '996 Greenholt Mews', quantity: '7', total: '189.77', status: 'yellow', textStatus: 'Pendiente', },
    ];

    return (
        <>
            <p className="text-xl text-center mb-5 font-semibold">Últimas órdenes</p>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Libro
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Nombre del cliente
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Dirección
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Cantidad
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Estatus
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <TableRow key={index} book={item.book} name={item.name} address={item.address} quantity={item.quantity} total={item.total} status={item.status} textStatus={item.textStatus} />
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    );
}