import "./App.css";
import sr from "./assets/sr.png";
import s from "./assets/s.png";
import asd from "./assets/asd.png";
import tb from "./assets/tb.png";
function App() {
  return (
    <>
        <div className="flex flex-col justify-center mx-auto container p-4 ">
          {/* header */}
          <div className="flex justify-between gap-4 items-center">
            <p className="text-sm font-bold ">
              MONTREAL CONGNITIVE ASSESSMENT {`( MOCA )`}
            </p>
            <div className="flex flex-col text-right">
              <p>ชื่อ :</p>
              <p>ระดับการศึกษา :</p>
              <p>เพศ :</p>
            </div>
            <div className="flex flex-col justify-end  text-right">
              <p>วันเดือนปีเกิด :</p>
              <p>วันที่ทำการทดสอบ :</p>
            </div>
          </div>

          {/* session */}
          <div className="border-2 flex flex-col rounded-xl min-h-screen">
            <div className="rounded-lg  flex w-full">
              <div className=" font-bold text-white flex  w-[90%] text-start  border border-black  border-b-none rounded-t-lg rounded-r-none">
                <div className="w-[50%]">
                  <div className="bg-[#2f2a2b]  rounded-t-lg px-2 rounded-r-none  border-b-none">
                    VISUOSPATIAL / EXECUTIVE
                  </div>
                  <div className="text-black">
                    <img src={s} alt="" />
                  </div>
                </div>

                <div className="font-bold flex justify-end px-5 w-[50%] h-full ">
                  <img className="" src={sr} alt="" />
                </div>
              </div>
              <div className="w-[10%] flex flex-col justify-between border-b">
                <div className="bg-[#2f2a2b] w-full text-center rounded-t-lg rounded-l-none text-white">
                  คะแนน
                </div>
                <div className=" text-center h-auto  px-1 border-black">
                  ____ /5
                </div>
              </div>
            </div>

            <div className="flex w-full  border-t-2">
              <div className=" font-bold text-white flex  w-[90%] h-[200px]  text-start  border-b-none  rounded-r-none">
                <div className="flex flex-col justify-between py-5 px-5 w-[90%] h-full text-black">
                  วาดหน้าปัดนาฬิกา บอกเวลาที่ 11.10 น. {"( 3คะแนน )"}
                  <img className="" src={""} alt="" />
                  <div className="flex justify-around">
                    <p className="flex flex-col items-center">
                      {"[   ]"} <span>รูปร่าง</span>
                    </p>
                    <p className="flex flex-col items-center">
                      {"[   ]"} <span>รูปร่าง</span>
                    </p>
                    <p className="flex flex-col items-center">
                      {"[   ]"} <span>รูปร่าง</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[10%] flex flex-col justify-between border-l">
                <div className=" text-white">ss</div>
                <div className=" text-center h-auto  px-1 border-black">
                  ____ /3
                </div>
              </div>
            </div>


            <div className="flex w-full border-t">
              <div className="font-bold text-white flex w-[90%] text-start border-b-none rounded-r-none">
                <div className="w-[20%]">
                  <div className="bg-[#2f2a2b] px-2 rounded-r-none border-b-none">
                    NAME
                  </div>
                </div>

                {/* ส่วนของข้อความและ checkbox */}
                <img className="" src={""} alt="" />
                <div className="w-[80%] flex justify-between py-5 px-5 text-black">
                <div className="flex flex-col justify-between py-20 px-2 w-[90%] h-full text-black">
                  <div className="flex w-full justify-between items-center">
                  <p className="flex flex-col items-center">
                      {"[   ]"} <span className="ml-2">รูปร่าง</span>
                    </p>
                    <p className="flex flex-col items-center">
                      {"[   ]"} <span className="ml-2">รูปร่าง</span>
                    </p>
                    <p className="flex flex-col items-center">
                      {"[   ]"} <span className="ml-2">รูปร่าง</span>
                    </p>
                  </div>
                </div>
              </div>
              </div>

              <div className="w-[10%] flex flex-col justify-between border-l">
                <div className="text-white">ss</div>
                <div className="text-center h-auto px-1 border-black">
                  ____ /3
                </div>
              </div>
            </div>




            <div className="flex w-full border-t">
              <div className=" font-bold text-white flex  w-[90%]  text-start  border border-black  border-b-none rounded-r-none">
                <div className="w-[25%]">
                  <div className="bg-[#2f2a2b] px-2 rounded-r-none  border-b-none">
                    MEMORY
                  </div>
                </div>

                <div className="font-bold flex justify-between px-1 w-[100%] h-full text-black">
                  <div className="flex w-full">
                    <div className="text-sm py-5 mx-2 w-[45%] ">
                      <p>
                        อ่านชุดคำเหล่านี้เเล้วให้ผู้ทดสอบ ทวนซ้ำ ทดสอบ 2 ครั้ง
                        เเละถามซ้ำอีกครั้งหลัง 5 นาที
                      </p>
                    </div>
                    {/* <img className="" src={sr} alt="" /> */}
                    <div className=" flex justify-center  w-full">
                      <table className="table-autp w-full">
                        <thead className="">
                          <th className="border px-2 whitespace-nowrap"></th>
                          <th className="border px-2 whitespace-nowrap">
                            หน้า
                          </th>
                          <th className="border px-2 whitespace-nowrap">
                            ผ้าไหม
                          </th>
                          <th className="border px-2 whitespace-nowrap">วัด</th>
                          <th className="border px-2 whitespace-nowrap">
                            มะลิ
                          </th>
                          <th className="border px-2 whitespace-nowrap">
                            สีแดง
                          </th>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border text-sm px-2 whitespace-nowrap">
                              ทวนครั้งที่ 1
                            </td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                          </tr>
                          <tr>
                            <td className="border text-sm px-2 whitespace-nowrap">
                              ทวนครั้งที่ 2
                            </td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[10%] flex flex-col justify-between  border-t">
                <div className=" text-white">ss</div>
                <div className=" text-center h-auto  px-1 border-black"></div>
              </div>
            </div>

            <div className="flex w-full border-t">
              <div className=" font-bold text-white flex  w-[90%] text-start  border border-black  border-b-none rounded-r-none">
                <div className="w-[25%]">
                  <div className="bg-[#2f2a2b] px-2 rounded-r-none  border-b-none">
                    ATTENTION
                  </div>
                </div>

                <div className="font-bold flex justify-between px-1 w-[100%]  h-full text-black">
                  <div className="flex w-full">
                    <div className="text-sm py-5 mx-2 w-[50%]">
                      <p>อ่านตัวเลขต่อไปนี้ตามลำดับ {"( 1 ตัว / วินาที )"}</p>
                    </div>
                    {/* <img className="" src={sr} alt="" /> */}
                    <div className="w-full flex justify-center gap-5">
                      <div className="flex flex-col justify-center items-start text-sm">
                        {" "}
                        <div className="">ให้ผู้ทดสอบทวนซ้ำตามลำดับ </div>
                        <div className="">ให้ผู้ทดสอบทวนซ้ำแบบย้อนกลับ </div>
                      </div>
                      <div className="flex flex-col justify-center items-start ">
                        {" "}
                        <div className="">{"[        ] 2 1 8 5 4"}</div>
                        <div className="">{"[        ] 2 1 8 5 4"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[10%] flex flex-col justify-between  border-t">
                <div className=" text-white">ss</div>
                <div className=" text-center h-auto  px-1 border-black">
                  ___ /2
                </div>
              </div>
            </div>

            <div className="flex w-full border-t">
              <div className=" font-bold py-2 text-white flex justify-center  w-[90%] text-start  border border-black  border-b-none rounded-r-none">
                <div className="font-bold px-1 flex flex-col w-[75%]   h-full text-black">
                  <div className="text-sm text-center whitespace-nowrap">
                    อ่านออกเวสียงตัวเลขต่อไปนี้
                    เเล้วให้ผู้ทดสอบเคาะโต๊ะเมื่อได้ยินเสียงอ่านเลข "1"
                    {"( ไม่มีคะเเนนถ้าผิดเกิน 2 ครั้ง )"}
                  </div>
                  <div className="text-center">
                    {
                      "[ ]  5 2 1 3 9 4 1 1 8 0 6 2 1 5 1 9 4 5 1 1 1 4 1 9 0 5 1 1 2"
                    }
                  </div>
                </div>
              </div>
              <div className="w-[10%] flex flex-col justify-between   border-t border-b">
                <div className=" text-white">ss</div>
                <div className=" text-center h-auto  px-1 border-black">
                  ___ /2
                </div>
              </div>
            </div>

            <div className="flex w-full ">
              <div className=" font-bold py-2 text-white flex justify-center  w-[90%] text-start  border border-black  border-b-none rounded-r-none">
                <div className="font-bold px-1 flex flex-col gap-2 w-[75%]   h-full text-black">
                  <div className="text-sm flex gap-10 justify-center text-center whitespace-nowrap">
                    <p>เริ่มจาก 100 ลบไปเรื่อยๆ ทีละ 7</p>
                    <p>{"[ ] 93"}</p>
                    <p>{"[ ] 86"}</p>
                    <p>{"[ ] 79"}</p>
                    <p>{"[ ] 72"}</p>
                    <p>{"[ ] 65"}</p>
                  </div>
                  <div className="text-center text-sm">
                    ลบถูก 4 หรือ 5 ตัว ได้ 3 คะแนน , 2 หรือ 3 ตัว ได้ 2 คะแนน ,
                    1 ตัวได้ 1 คะแนน , 0 ตัว ไม่ได้คะเเนน
                  </div>
                </div>
              </div>
              <div className="w-[10%]  flex flex-col justify-between  border-t border-b">
                <div className=" text-white">ss</div>
                <div className=" text-center h-auto  px-1 border-black">
                  ___ /3
                </div>
              </div>
            </div>

            <div className="flex w-full border-t">
              <div className=" font-bold text-white flex  w-[90%] text-start  border border-black  border-b-none rounded-r-none">
                <div className="w-[25%]">
                  <div className="bg-[#2f2a2b] px-2 rounded-r-none  border-b-none">
                    LANGUAGE
                  </div>
                </div>

                <div className="font-bold flex justify-between px-1 w-[100%]  h-full text-black">
                  <div className="flex w-full">
                    <div className="text-sm py-5 mx-1 w-[10%]">
                      <p>Repeat : </p>
                    </div>
                    <div className="w-full flex justify-center gap-5">
                      <div className="flex flex-col justify-center items-start text-sm">
                        {" "}
                        <div className="">
                          ฉันรู้ว่าจอมเป็นคนเดียวที่ช่วยงานวันนี้
                        </div>
                        <div className="">
                          เเมวมักซ่อนตัวอยู่หลังเก้าอี้เมื่อมีหมาอยู่ในห้้อง
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-start ">
                        {" "}
                        <div className="">{"[        ] "}</div>
                        <div className="">{"[        ] "}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[10%] flex flex-col justify-between  border-t border-b ">
                <div className=" text-white">ss</div>
                <div className=" text-center h-auto  px-1 border-black">
                  ___ /2
                </div>
              </div>
            </div>

            <div className="flex w-full">
              <div className=" font-bold py-2 text-white flex justify-center  w-[90%] text-start  border border-black  border-b-none rounded-r-none">
                <div className="font-bold px-1 flex flex-col gap-2 w-[75%]   h-full text-black">
                  Fluency / บอกคำที่ขึ้นต้นด้วยอักษร " ก " ให้มากที่สุดใน 1 นาที
                  ก {"[  ] _____           (N >= 11 words)"}
                </div>
              </div>
              <div className="w-[10%]  flex flex-col justify-between  border-t border-b">
                <div className=" text-white">ss</div>
                <div className=" text-center h-auto  px-1 border-black">
                  ___ /1
                </div>
              </div>
            </div>

            <div className="flex w-full border-t">
              <div className=" font-bold text-white  flex  w-[90%] text-start  border border-black  border-b  rounded-r-none">
                <div className="w-[90%]  flex">
                  <div className="bg-[#2f2a2b] px-20 rounded-r-none  border-b">
                    ABSTRACTION
                  </div>
                  <div className="px-2 text-black rounded-r-none text-sm border-b-none text-center">
                    บอกความเหมือนกันระหว่าง 2 สิ่ง เช่น กล้วน-ส้ม : เป็นผลไม้{" "}
                    {"[ ] "} รถไฟ - จักรยาน {"[ ] "} นาฬิกา - ไม้บรรทัด
                  </div>
                </div>
              </div>
              <div className="w-[10%] flex flex-col justify-between  border-t border-b ">
                <div className=" text-white">ss</div>
                <div className=" text-center h-auto  px-1 border-black">
                  ___ /2
                </div>
              </div>
            </div>

            <div className="flex w-full border-t">
              <div className=" font-bold text-white flex  w-[90%]  text-start  border border-black  border-b-none rounded-r-none">
                <div className="w-[25%] max-h-[200px]">
                  <div className="bg-[#2f2a2b] h-6 justify-center items-center flex">
                    MEMORY
                  </div>
                  <div className="bg-[#2f2a2b] justify-center h-6 items-center flex"></div>
                  <div className="bg-black justify-center h-6 items-center flex"></div>
                  <div className="bg-black justify-center h-6 items-center flex">Optional
                
                  </div>
                </div>
                
                

                <div className="font-bold flex justify-between w-[100%] h-full text-black">
                    
                  <div className="flex w-full">
                    
                    {/* <img className="" src={sr} alt="" /> */}
                    <div className=" flex justify-center  w-full">
                        
                      <table className="table-autp w-full">
                        <thead className="">
                          <th className="border px-2 whitespace-nowrap">
                          ให้ทวนชุดคำที่จำไว้ก่อนหน้านี้ 
                          โดยไม่มีการให้ตัวช่วย
                          </th>
                          <th className="border px-7 whitespace-nowrap">
                            หน้า
                          </th>
                          <th className="border px-7 whitespace-nowrap">
                            ผ้าไหม
                          </th>
                          <th className="border px-7 whitespace-nowrap">วัด</th>
                          <th className="border px-7 whitespace-nowrap">
                            มะลิ
                          </th>
                          <th className="border px-7 whitespace-nowrap">
                            สีแดง
                          </th>
                          <th className="row-span-3">
                            <p>ให้คะเเนนเฉพาะคำที่ 
                            
                            </p>
                            <p>ทวนได้โดยไม่ให้ตัวช่วย</p>
                          </th>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border text-sm px-2 whitespace-nowrap">
                             Category cue
                            </td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                          </tr>
                          <tr>
                            <td className="border text-sm px-2 whitespace-nowrap">
                            Multiple choice cue
                            </td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                            <td className="border text-sm px-2 whitespace-nowrap"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[10%]  flex flex-col justify-between  border-t border-b">
                <div className=" text-white">ss</div>
                <div className=" text-center h-auto  px-1 border-black">
                  ___ /6
                </div>
              </div>
            </div>
           


            <div className="flex w-full border-t rounded-b-lg">
              <div className=" font-bold text-white flex rounded-b-lg  w-[90%] text-start  border border-black  border-b-none rounded-r-none">
                <div className="w-full flex ">
                  <div className="w-[15%] bg-[#2f2a2b] px-2 flex justify-center items-center rounded-r-none  border-b-none">
                    ORIENTATION
                  </div>
                  <div className="text-black px-2 flex justify-center items-center gap-5">
                    {
                      "[ ] วันที่ [ ] เดือน [ ] ปี [ ] วัน [ ] สถานที่ [ ] จังหวัด"
                    }
                  </div>
                </div>
              </div>
              <div className="w-[10%] flex flex-col justify-between  border-t border-b ">
                <div className=" text-white">ss</div>
                <div className=" text-center h-auto  px-1 border-black">
                  ___ /6
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="px-5 pt-2">
              Translated by Solaphat Hemrungrojn MD <br />
              Trial version 01 Updated August 31, 2011 <br />
              @Z Nasredine MD <br />
              <b>www.mocatest.org</b>
            </div>
            <div className="px-5 pt-2">ค่าปกติ {">="} 25 / 30</div>
            <div className="border-4 border-t-0 p-2 px-4 rounded-b-2xl w-[35%] flex justify-between pt-2">
              <div className="">
                <div className="flex justify-between">
                  <p>คะแนนรวม</p>
                  <p>___ / 30</p>
                </div>
                <div className="flex justify-between">
                  <p>เพิ่ม 1 คะแนน ถ้าจำนวนปีการศึกษา {"<= 6"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
   
    </>
  );
}

export default App;
