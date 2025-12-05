import { useEffect } from "react";

/**
 * SummaryLayout.jsx
 * Faithful Tailwind-based recreation of XY-009-NEW-SUMMARY-LAYOUT (slide 1) using the
 * provided slide image as a visual reference. This single-file React component focuses
 * on layout, typography, colors and placeholder charts so you can wire real data later.
 *
 * Usage:
 *  - Place this file in src/components/SummaryLayout.jsx
 *  - Ensure Tailwind CSS is installed and configured in your project
 *  - Import and render <SummaryLayout /> in your app
 *
 * Notes:
 *  - This is a static visual recreation (no charting libraries). Replace the SVGs with
 *    real chart components (Chart.js, Recharts, etc.) if needed.
 */

export default function SummaryLayout() {
    useEffect(() => {
        // delay slightly to ensure content finishes rendering
        setTimeout(() => {
            // window.print();
        }, 300);
    }, []);
    return (
        <div className="min-h-screen bg-white p-6">
            {/* Outer framed card to match slide white area with thin border */}
            <div className="mx-auto max-w-[1400px]">
                {/* Header row */}
                <div className="flex items-center justify-between mb-2"> 
                    <div className='w-1/3'></div>

                    <div className="w-1/3 text-center"><span className="title-6">Review Summary Report - [LEADERSHIP]</span></div>
                    
                    <div className="w-1/3 text-right">
                        <div className="text-xs">Printed: 04/10/2025</div> 
                    </div>
                </div>

                <div className="flex items-start justify-between border-b-2 pb-4  border-primary my-4"> 
                    <div className='w-1/3'><span className="title-7">Leadership - Review</span></div>
                    <div className="w-1/3 text-right">
                        <div className="text-xs"><span className="title-7">Risk Cost Centre Report</span></div> 
                    </div>
                </div>

                <div className="flex items-start justify-between my-4"> 
                    <div className='w-1/3'><span className="title-7">Review Totals - [Levels]</span></div>
                    <div className="w-1/3 justify-end items-center flex gap-2">
                        <span className='large font-bold'>Review Total: </span>
                        <div className="">
                            <span>Completed: </span>
                            <span className='px-4 py-2 bg-success rounded-xl text-white font-bold'>321</span>    
                        </div>
                        <div className="">
                            <span>Pending: </span>
                            <span className='px-4 py-2 bg-warning rounded-xl text-white font-bold'>16</span>    
                        </div> 
                    </div>
                </div>

                <div className="flex items-start justify-end my-4"> 
                    
                    <div className="w-1/3 justify-end items-center flex gap-2">
                        <span className='large font-bold'>Risk Level: </span>
                        
                        <div className="text-danger">
                            <span>High</span> 
                        </div> 
                    </div>
                </div>


                {/* Main title and big amount */}
                <div className="text-center mt-4 mb-6">
                    <h2 className="text-2xl font-medium">Estimated Risk | Cost Centre Loss</h2>
                    <div className="mt-3 text-4xl font-extrabold text-red-700">$2,224,475.00</div> 
                    </div>

                    {/* Three panels row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 print-columns-3">

                    {/* Left: NPS + Pie */}
                    <div className="border rounded-2xl p-6 flex flex-col items-center print-columns" style={{borderColor:'#a33', boxShadow:'inset 0 0 0 2px rgba(163,51,51,0.06)'}}>
                        <div className="w-full flex items-start justify-between">
                        </div>

                        <div className="mt-3 flex items-center gap-6 w-full">
                            <div className="text-sm font-medium">NPS</div>

                            {/* Pie placeholder - split two colors similar to slide */}
                            <svg width="160" height="160" viewBox="0 0 160 160">
                                <defs></defs>
                                <circle cx="80" cy="80" r="70" fill="#6b7781" />
                                <path d="M80 10 A70 70 0 0 1 150 80 L80 80 Z" fill="#8a2018" />
                            </svg>

                            <div className="text-sm font-medium">KPI %:</div>

                        </div>

                        <div className="w-full mt-4 flex justify-between text-sm">
                        <div className="text-center">
                            <div className="bg-slate-800 text-white rounded px-2 py-1 text-xs">138 (43%)</div>
                            <div className="mt-2 text-xs">Not At Risk</div>
                        </div>

                        <div className="text-center">
                            <div className="bg-red-700 text-white rounded px-2 py-1 text-xs">183 (57%)</div>
                            <div className="mt-2 text-xs">At Risk</div>
                        </div>
                        </div>
                    </div>

                    {/* Middle: RCC Risk Summary Estimates */}
                    <div className="border rounded-2xl p-6 flex flex-col items-center print-columns" style={{borderColor:'#a33'}}>
                        <div className="text-sm font-semibold">RCC Risk Summary Estimates:</div>
                        <div className="w-full flex items-end justify-between mt-4 gap-3">
                        {/* Circle 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full border-4 border-red-700 flex flex-col items-center justify-center text-center">
                            <div className="text-sm">38%</div>
                            <div className="font-bold text-lg">69</div>
                            </div>
                            <div className="text-xs mt-2">Lost Productivity Cost</div>
                        </div>

                        {/* Circle 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full border-4 border-amber-500 flex flex-col items-center justify-center text-center">
                            <div className="text-sm">25%</div>
                            <div className="font-bold text-lg">46</div>
                            </div>
                            <div className="text-xs mt-2">Lost Productivity Cost</div>
                        </div>

                        {/* Circle 3 */}
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full border-4 border-sky-600 flex flex-col items-center justify-center text-center">
                            <div className="text-sm">37%</div>
                            <div className="font-bold text-lg">68</div>
                            </div>
                            <div className="text-xs mt-2">Lost Productivity Cost</div>
                        </div>
                        </div>

                        {/* Cost bars */}
                        <div className="w-full mt-6 rounded-lg overflow-hidden border-2" style={{borderColor:'#7a1f1f'}}>
                        <div className="flex">
                            <div className="flex-1 p-3 bg-red-700 text-white text-sm font-semibold">$1,198,925.00</div>
                            <div className="p-3 bg-amber-500 text-sm font-semibold">$508,300.00</div>
                            <div className="p-3 bg-sky-600 text-white text-sm font-semibold">$187,850.00</div>
                        </div>
                        </div>
                    </div>

                    {/* Right: Staff Replacement Costs */}
                    <div className="border rounded-2xl p-6 print-columns" style={{borderColor:'#a33'}}>
                        <div className="text-base font-semibold">Staff Replacement Costs</div>

                        <div className="mt-4 text-sm space-y-2">
                        <div>Ind. Replacement Cost: <span className="font-semibold">$20,000.00</span></div>
                        <div>Avg. Staff Turnover: <span className="font-semibold">15%</span></div>
                        <div>At Risk Potential Loss: <span className="font-semibold">$3,660,000.00</span></div>
                        <div>Staff at T/O Rate: <span className="font-semibold">27.45</span></div>
                        <div>Cost at T/O Rate: <span className="font-semibold">$549,000.00</span></div>

                        <div className="mt-3 text-sm font-semibold text-red-700">Review Causality $: <span className="font-bold text-black">$329,400.00</span></div>
                        </div>
                    </div>

                </div>

                
            </div>

            {/* second page */}
            <div className="mx-auto max-w-[1400px]">
                {/* Header row */}
                <div className="flex items-center justify-between mb-2">
                    <div className='w-1/3'></div>

                    <div className="w-1/3 text-center"><span className="title-6">Review Summary Report - [LEADERSHIP]</span></div>

                    <div className="w-1/3 text-right">
                        <div className="text-xs">Printed: 04/10/2025</div>
                    </div>
                </div>

                <div className="flex items-start justify-between border-b-2 pb-4  border-primary my-4">
                    <div className='w-1/3'><span className="title-7">Leadership - Review</span></div>
                    <div className="w-1/3 text-right">
                        <div className="text-xs"><span className="title-7">Risk Cost Centre Report</span></div>
                    </div>
                </div>

                <div className="flex items-start justify-between my-4">
                    <div className='w-1/3'><span className="title-7">Review Totals - [Levels]</span></div>
                    <div className="w-1/3 justify-end items-center flex gap-2">
                        <span className='large font-bold'>Review Total: </span>
                        <div className="">
                            <span>Completed: </span>
                            <span className='px-4 py-2 bg-success rounded-xl text-white font-bold'>321</span>
                        </div>
                        <div className="">
                            <span>Pending: </span>
                            <span className='px-4 py-2 bg-warning rounded-xl text-white font-bold'>16</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-start justify-end my-4">

                    <div className="w-1/3 justify-end items-center flex gap-2">
                        <span className='large font-bold'>Risk Level: </span>

                        <div className="text-danger">
                            <span>High</span>
                        </div>
                    </div>
                </div>


                {/* Main title and big amount */}
                <div className="text-center mt-4 mb-6">
                    <h2 className="text-center title-6 border">TOP 10 CRITERIA</h2>
                    <div className="">
                        <div><span></span></div>
                    </div>
                </div>

                {/* Three panels row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 print-columns-3">

                    {/* Left: NPS + Pie */}
                    <div className="border rounded-2xl p-6 flex flex-col items-center print-columns" style={{ borderColor: '#a33', boxShadow: 'inset 0 0 0 2px rgba(163,51,51,0.06)' }}>
                        <div className="w-full flex items-start justify-between">
                        </div>

                        <div className="mt-3 flex items-center gap-6 w-full">
                            <div className="text-sm font-medium">NPS</div>

                            {/* Pie placeholder - split two colors similar to slide */}
                            <svg width="160" height="160" viewBox="0 0 160 160">
                                <defs></defs>
                                <circle cx="80" cy="80" r="70" fill="#6b7781" />
                                <path d="M80 10 A70 70 0 0 1 150 80 L80 80 Z" fill="#8a2018" />
                            </svg>

                            <div className="text-sm font-medium">KPI %:</div>

                        </div>

                        <div className="w-full mt-4 flex justify-between text-sm">
                            <div className="text-center">
                                <div className="bg-slate-800 text-white rounded px-2 py-1 text-xs">138 (43%)</div>
                                <div className="mt-2 text-xs">Not At Risk</div>
                            </div>

                            <div className="text-center">
                                <div className="bg-red-700 text-white rounded px-2 py-1 text-xs">183 (57%)</div>
                                <div className="mt-2 text-xs">At Risk</div>
                            </div>
                        </div>
                    </div>

                    {/* Middle: RCC Risk Summary Estimates */}
                    <div className="border rounded-2xl p-6 flex flex-col items-center print-columns" style={{ borderColor: '#a33' }}>
                        <div className="text-sm font-semibold">RCC Risk Summary Estimates:</div>
                        <div className="w-full flex items-end justify-between mt-4 gap-3">
                            {/* Circle 1 */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full border-4 border-red-700 flex flex-col items-center justify-center text-center">
                                    <div className="text-sm">38%</div>
                                    <div className="font-bold text-lg">69</div>
                                </div>
                                <div className="text-xs mt-2">Lost Productivity Cost</div>
                            </div>

                            {/* Circle 2 */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full border-4 border-amber-500 flex flex-col items-center justify-center text-center">
                                    <div className="text-sm">25%</div>
                                    <div className="font-bold text-lg">46</div>
                                </div>
                                <div className="text-xs mt-2">Lost Productivity Cost</div>
                            </div>

                            {/* Circle 3 */}
                            <div className="flex flex-col items-center">
                                <div className="w-20 h-20 rounded-full border-4 border-sky-600 flex flex-col items-center justify-center text-center">
                                    <div className="text-sm">37%</div>
                                    <div className="font-bold text-lg">68</div>
                                </div>
                                <div className="text-xs mt-2">Lost Productivity Cost</div>
                            </div>
                        </div>

                        {/* Cost bars */}
                        <div className="w-full mt-6 rounded-lg overflow-hidden border-2" style={{ borderColor: '#7a1f1f' }}>
                            <div className="flex">
                                <div className="flex-1 p-3 bg-red-700 text-white text-sm font-semibold">$1,198,925.00</div>
                                <div className="p-3 bg-amber-500 text-sm font-semibold">$508,300.00</div>
                                <div className="p-3 bg-sky-600 text-white text-sm font-semibold">$187,850.00</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Staff Replacement Costs */}
                    <div className="border rounded-2xl p-6 print-columns" style={{ borderColor: '#a33' }}>
                        <div className="text-base font-semibold">Staff Replacement Costs</div>

                        <div className="mt-4 text-sm space-y-2">
                            <div>Ind. Replacement Cost: <span className="font-semibold">$20,000.00</span></div>
                            <div>Avg. Staff Turnover: <span className="font-semibold">15%</span></div>
                            <div>At Risk Potential Loss: <span className="font-semibold">$3,660,000.00</span></div>
                            <div>Staff at T/O Rate: <span className="font-semibold">27.45</span></div>
                            <div>Cost at T/O Rate: <span className="font-semibold">$549,000.00</span></div>

                            <div className="mt-3 text-sm font-semibold text-red-700">Review Causality $: <span className="font-bold text-black">$329,400.00</span></div>
                        </div>
                    </div>

                </div>


            </div>
        </div>

        
    );
}
