'use client';
export default function DashboardDataCart({ title, num }) {
    return (
        <div className="w-full flex justify-center mb-6 md:mb-0">
            <div class="w-5/6 p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">{title}</h5>
                <div class="mb-3 font-normal text-gray-700 text-center text-xl">{num}</div>
            </div>
        </div>
    );
}