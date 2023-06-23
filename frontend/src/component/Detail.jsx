import React from 'react'

const Detail = () => {
  return (
    <div class="container max-w-full p-3 mx-auto ">
        {/* <div class="grid grid-rows-3 grid-flow-col gap-4">
            <div class="row-span-3 bg-primary">01</div>
            <div class="col-span-2 bg-primary">02</div>
            <div class="row-span-2 col-span-2 bg-primary">03</div>
        </div> */}
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='container w-full rounded-md'>
                <div className='bg-secondary h-[60px] rounded-md mb-3 w-1/2'>
                    <button className="bg-primary hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center w-full h-[60px] border-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 50 50"><path fill="currentColor" d="M25 0c-8.284 0-15 6.656-15 14.866c0 8.211 15 35.135 15 35.135s15-26.924 15-35.135C40 6.656 33.284 0 25 0zm-.049 19.312c-2.557 0-4.629-2.055-4.629-4.588c0-2.535 2.072-4.589 4.629-4.589c2.559 0 4.631 2.054 4.631 4.589c0 2.533-2.072 4.588-4.631 4.588z"/></svg>
                        <span>Lihat Rute</span>
                    </button>
                </div>
                <div className='bg-primary h-[295px] overflow-y-auto rounded-md p-2'>
                    
                        <div className="overflow-x-auto bg-base-100 rounded-md">
                            <table className="table rounded-md">
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>Nama Pondok Pesantren</td>
                                        <td></td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>Pengasuh</td>
                                        <td></td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>Jumlah Santri</td>
                                        <td></td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr>
                                        <td>Jumlah Santri Ikhwan</td>
                                        <td></td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr>
                                        <td>Jumlah Santri Akhwat</td>
                                        <td></td>
                                    </tr>
                                    {/* row 6 */}
                                    <tr>
                                        <td>Jumlah Pengajar</td>
                                        <td></td>
                                    </tr>
                                    {/* row 7 */}
                                    <tr>
                                        <td>Akreditasi</td>
                                        <td></td>
                                    </tr>
                                    {/* row 8 */}
                                    <tr>
                                        <td>Kategori</td>
                                        <td></td>
                                    </tr>
                                    {/* row 9 */}
                                    <tr>
                                        <td>Alamat</td>
                                        <td></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>    
                    
                </div>
            </div>
            <div className='container bg-primary w-full rounded-md p-2 '>
                <img src="https://picsum.photos/200/300" className='rounded-md object-fill w-full h-[350px]'/>
            </div>
        </div>
    </div>
  )
}

export default Detail