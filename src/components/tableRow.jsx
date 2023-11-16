export default function TableRow({book, name, address, quantity, total, status, textStatus}) {
    return (
        <>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {book}
                </th>
                <td class="px-6 py-4">
                    {name}
                </td>
                <td class="px-6 py-4">
                    {address}
                </td>
                <td class="px-6 py-4">
                    {quantity}
                </td>
                <td class="px-6 py-4">
                    <span class={`bg-${status}-100 text-${status}-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded`}>{textStatus}</span>
                </td>
                <td class="px-6 py-4">
                    ${total}
                </td>
            </tr>
        </>
    );
}