import {React} from 'react'
import ChartView from './Chart';

const Detail = ({detailSchool}) => {

   const sum_stuednt = parseInt(detailSchool.sum_male_student) + parseInt(detailSchool.sum_female_student);
   const imageUrl = detailSchool.image;
   const imgSrc = imageUrl ? imageUrl : 'https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg';
  return  (
    <div className="container max-w-full mx-auto mt-3 px-3">
            <div className='bg-base-100 h-auto rounded-md mb-3 w-[250px] p-2'>
                <button onClick={() => window.open(`https://www.google.com/maps/dir//${detailSchool.location.lat},${detailSchool.location.lon}`)} target="_blank" className="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center w-full h-[50px] border-none">
                    <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 50 50"><path fill="currentColor" d="M25 0c-8.284 0-15 6.656-15 14.866c0 8.211 15 35.135 15 35.135s15-26.924 15-35.135C40 6.656 33.284 0 25 0zm-.049 19.312c-2.557 0-4.629-2.055-4.629-4.588c0-2.535 2.072-4.589 4.629-4.589c2.559 0 4.631 2.054 4.631 4.589c0 2.533-2.072 4.588-4.631 4.588z"/></svg>
                    <span>Lihat Rute</span>
                </button>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='container w-full rounded-md'>
                    <div className='bg-base-100 h-auto overflow-y-auto rounded-md p-2'>
                        <h1 className='p-2 text-white font-bold mb-2'>Informasi</h1>
                            <div className="overflow-x-auto bg-base-300 rounded-md">
                                <table className="table rounded-md">
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>Nama Pondok Pesantren</td>
                                            <td>{detailSchool.name}</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>Pengasuh</td>
                                            <td>{detailSchool.headmaster}</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>Jumlah Santri</td>
                                            <td>{sum_stuednt}</td>
                                        </tr>
                                        {/* row 4 */}
                                        <tr>
                                            <td>Jumlah Santri Ikhwan</td>
                                            <td>{detailSchool.sum_male_student}</td>
                                        </tr>
                                        {/* row 5 */}
                                        <tr>
                                            <td>Jumlah Santri Akhwat</td>
                                            <td>{detailSchool.sum_female_student}</td>
                                        </tr>
                                        {/* row 6 */}
                                        <tr>
                                            <td>Jumlah Pengajar</td>
                                            <td>{detailSchool.sum_teacher}</td>
                                        </tr>
                                        {/* row 7 */}
                                        <tr>
                                            <td>Akreditasi</td>
                                            <td>{detailSchool.acreditation}</td>
                                        </tr>
                                        {/* row 8 */}
                                        <tr>
                                            <td>Kategori</td>
                                            <td>{detailSchool.category.name}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>    
                    </div>
                </div>
                <div className='container bg-base-100 w-full h-[400px] rounded-md p-2'>
                    <div className='p-1'>
                        <h1 className='text-white font-bold'>Foto</h1>
                    </div>
                    <img src={imgSrc} className='rounded-md object-fill w-full h-[350px] pt-2' alt='img'/>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                <div className='container w-full rounded-md'>
                    <div className='bg-base-100 h-auto overflow-y-auto rounded-md p-2'>
                        <h1 className='p-2 text-white font-bold mb-2'>Alamat</h1>
                            <div className="overflow-x-auto bg-base-300 rounded-md">
                                <table className="table rounded-md">
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>Jalan/Desa</td>
                                            <td>{detailSchool.address.street + " " + detailSchool.address.sub_district}</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>Kecamatan</td>
                                            <td>{detailSchool.address.district}</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>Kabupaten</td>
                                            <td>{detailSchool.address.regency}</td>
                                        </tr>
                                        {/* row 4 */}
                                        <tr>
                                            <td>Kode Pos</td>
                                            <td>{detailSchool.address.pos_code}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>    
                    </div>
                </div>
                <div className='bg-base-100 h-[200px] overflow-y-auto rounded-md p-2'>
                        <h1 className='p-2 text-white font-bold mb-2'>Kurikulum</h1>
                            <div className="overflow-x-auto bg-base-300 rounded-md">
                                <table className="table rounded-md">
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>Versi</td>
                                            <td>{detailSchool.curriculum.version}</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>Jumlah Pelajaran</td>
                                            <td>{detailSchool.curriculum.sum_lesson}</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>Program Unggulan</td>
                                            <td>{detailSchool.curriculum.flagship_program}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>   
                    </div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
                <div className='container w-full rounded-md'>
                    <div className='bg-base-100 h-auto overflow-y-auto rounded-md p-2'>
                        <h1 className='p-2 text-white font-bold mb-2'>Subjek Inti</h1>
                            <div className="overflow-x-auto bg-base-300 rounded-md">
                                <table className="table rounded-md">
                                    <tbody>
                                        {/* row 1 */}
                                        {detailSchool.curriculum.core_subjects.map((subject, index) => (
                                            <tr key={index}>
                                                <td>{subject}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>    
                    </div>
                </div>
                <div className='bg-base-100 h-auto overflow-y-auto rounded-md p-2'>
                        <h1 className='p-2 text-white font-bold mb-2'>Subjek Pilihan</h1>
                            <div className="overflow-x-auto bg-base-300 rounded-md">
                                <table className="table rounded-md">
                                    <tbody>
                                        {/* row 1 */}
                                        {detailSchool.curriculum.elective_subjects.map((subject, index) => (
                                            <tr key={index}>
                                                <td>{subject}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>    
                    </div>
                    <div className='bg-base-100 h-auto overflow-y-auto rounded-md p-2'>
                        <h1 className='p-2 text-white font-bold mb-2'>Program Spesial</h1>
                            <div className="overflow-x-auto bg-base-300 rounded-md">
                                <table className="table rounded-md">
                                    <tbody>
                                        {/* row 1 */}
                                        {detailSchool.curriculum.special_programs.map((subject, index) => (
                                            <tr key={index}>
                                                <td>{subject}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>    
                    </div>
            </div>
            <ChartView labels1={["Laki-Laki", "Perempuan"]} data1={[detailSchool.sum_male_student, detailSchool.sum_female_student]} label1={"Siswa"} labels2={["Siswa", "Pengajar"]} data2={[sum_stuednt, detailSchool.sum_teacher]} label2={"Pelajaran"} />
        </div>
  )
}

export default Detail