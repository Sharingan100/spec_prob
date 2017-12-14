
            // d3.text("data.csv", function(data) {
            //     var parsedCSV = d3.csv.parseRows(data);

            //     var container = d3.select("body")
            //         .append("table")

            //         .selectAll("tr")
            //             .data(parsedCSV).enter()
            //             .append("tr")

            //         .selectAll("td")
            //             .data(function(d) { return d; }).enter()
            //             .append("td")
            //             .text(function(d) { return d; });
            // });
var data = [
  {
    "No.": 1,
    "SECT_NAME": "แยกคอกวัว",
    "CROSS_ROAD": "ถนนราชดำเนินกลาง - ถนนตะนาว"
  },
  {
    "No.": 2,
    "SECT_NAME": "แยกนางเลิ้ง",
    "CROSS_ROAD": "ถนนพิษณุโลก - ถนนนครสวรรค์"
  },
  {
    "No.": 3,
    "SECT_NAME": "แยกลำสาลี",
    "CROSS_ROAD": "ถนนศรีนครินทร์ - ถนนรามคำแหง"
  },
  {
    "No.": 4,
    "SECT_NAME": "แยกนิด้า",
    "CROSS_ROAD": "ถนนเสรีไทย - ถนนบูรพา"
  },
  {
    "No.": 5,
    "SECT_NAME": "สามแยกบางกะปิ",
    "CROSS_ROAD": "ถนนศรีนครินทร์ - ถนนลาดพร้าว"
  },
  {
    "No.": 6,
    "SECT_NAME": "สี่แยกแฮปปี้แลนด์",
    "CROSS_ROAD": "ถนนลาดพร้าว - ถนนแฮปปี้แลนด์"
  },
  {
    "No.": 7,
    "SECT_NAME": "แยกซอยอารีย์",
    "CROSS_ROAD": "ถนนพหลโยธิน"
  },
  {
    "No.": 8,
    "SECT_NAME": "หน้าอิมพีเรียล ลาดพร้าว",
    "CROSS_ROAD": "ถนนลาดพร้าว - ถนนประดิษฐ์มนูธรรม"
  },
  {
    "No.": 9,
    "SECT_NAME": "สามแยกลาดพร้าว 101",
    "CROSS_ROAD": "ถนนลาดพร้าว - ซอยลาดพร้าว 101"
  },
  {
    "No.": 10,
    "SECT_NAME": "จุดกลับรถปากซอยลาดพร้าว102",
    "CROSS_ROAD": "ถนนลาดพร้าว - ซอยลาดพร้าว 102"
  },
  {
    "No.": 11,
    "SECT_NAME": "จุดกลับรถปากซอยลาดพร้าว",
    "CROSS_ROAD": "ถนนลาดพร้าว"
  },
  {
    "No.": 12,
    "SECT_NAME": "จุดกลับรถ ถ.รามฯ หน้าซอยรามฯ 142",
    "CROSS_ROAD": "ถนนรามคำแหง - หน้าซอยรามคำแหง 142"
  },
  {
    "No.": 13,
    "SECT_NAME": "สี่แยกประเวศ",
    "CROSS_ROAD": "ถนนเฉลิมพระเกียรติ์ ร.9 - ถนนสุขุมวิท 77 (อ่อนนุช)"
  },
  {
    "No.": 14,
    "SECT_NAME": "จุดกลับรถถนนคู่ขนานมอเตอร์เวย์",
    "CROSS_ROAD": "ถนนพระราม 9 - ถนนศรีนครินทร์"
  },
  {
    "No.": 15,
    "SECT_NAME": "ทางลงสู่วงแหวนรอบนอก (บางปะอิน - บางนา) สู่ ถ.รามฯ",
    "CROSS_ROAD": "ถนนรามคำแหง"
  },
  {
    "No.": 16,
    "SECT_NAME": "แยกศิริราช",
    "CROSS_ROAD": "ถนนอรุณอัมรินทร์ - ถนนพรานนก"
  },
  {
    "No.": 17,
    "SECT_NAME": "แยกประตูน้ำ (สะพานเฉลิมโลก)",
    "CROSS_ROAD": "ถนนเพชรบุรี - ถนนราชปรารภ"
  },
  {
    "No.": 18,
    "SECT_NAME": "แยก จปร.",
    "CROSS_ROAD": "ถนนราชดำเนินนอก - ถนนจักพรรดิ์พงษ์"
  },
  {
    "No.": 19,
    "SECT_NAME": "แยกโบสถ์แม่พระ",
    "CROSS_ROAD": "ถนนประชาสงเคราะห์ - ถนนดินแดง"
  },
  {
    "No.": 20,
    "SECT_NAME": "ตรอกอิสรานุภาพ",
    "CROSS_ROAD": "ถนนเจริญกรุง - ตรอกอิสรานุภาพ"
  },
  {
    "No.": 21,
    "SECT_NAME": "ตรงข้างตลาดเก่า ถ.เยาวราช",
    "CROSS_ROAD": "ถนนเยาวราช"
  },
  {
    "No.": 22,
    "SECT_NAME": "ถนนกรุงธนบุรี",
    "CROSS_ROAD": "ถนนกรุงธนบุรี"
  },
  {
    "No.": 23,
    "SECT_NAME": "แยกพระรามเก้า 2",
    "CROSS_ROAD": "พระรามเก้า 2 - ถนนประดิษฐ์มนูธรรม"
  },
  {
    "No.": 24,
    "SECT_NAME": "ถนนมเหสักข์ ตัด ถนนสุรวงศ์",
    "CROSS_ROAD": "ถนนมเหศักดิ์ - ถนนสุรวงศ์"
  },
  {
    "No.": 25,
    "SECT_NAME": "ถนนพระราม 4  ตัด ถนนสุรวงศ์",
    "CROSS_ROAD": "ถนนพระราม 4  - ถนนสุรวงศ์"
  },
  {
    "No.": 26,
    "SECT_NAME": "ถนนสี่พระยา ตัด ถนนมหานคร",
    "CROSS_ROAD": "ถนนสี่พระยา - ถนนมหานคร"
  },
  {
    "No.": 27,
    "SECT_NAME": "ถนนสี่พระยา ตัด ถนนเจริญกรุง",
    "CROSS_ROAD": "ถนนสี่พระยา - ถนนเจริญกรุง"
  },
  {
    "No.": 28,
    "SECT_NAME": "บริเวณเชิงสะพานสมเด็จพระปิ่นเกล้า",
    "CROSS_ROAD": "ถนนสมเด็จพระปิ่นเกล้า"
  },
  {
    "No.": 29,
    "SECT_NAME": "แยกถนนรามอินทรา กม. 8",
    "CROSS_ROAD": "ถนนรามอินทรา"
  },
  {
    "No.": 30,
    "SECT_NAME": "วงเวียนหลักสี่ (บางเขน)",
    "CROSS_ROAD": "ถนนพหลโยธิน - รามอินทรา"
  },
  {
    "No.": 31,
    "SECT_NAME": "สี่แยกเกษตรเข้าถนนเกษตร - ถนนนวมินทร์",
    "CROSS_ROAD": "ถนนพหลโยธิน - ถนนนวมินทร์"
  },
  {
    "No.": 32,
    "SECT_NAME": "แยกรัชโยธิน",
    "CROSS_ROAD": "ถนนพหลโยธิน - ถนนรัชดาภิเษก"
  },
  {
    "No.": 33,
    "SECT_NAME": "วงเวียนใหญ่",
    "CROSS_ROAD": "ถนนสมเด็จพระเจ้าตากิสน - อินทรพิทักษ์ - ลาดหญ้า"
  },
  {
    "No.": 34,
    "SECT_NAME": "สี่แยกวงศ์สว่าง",
    "CROSS_ROAD": "ถนนวงศ์สว่าง - ถนนกรุงเทพนนทบุรี"
  },
  {
    "No.": 35,
    "SECT_NAME": "แยกมไหสวรรย์",
    "CROSS_ROAD": "ถนนสมเด็จพระเจ้าตากสิน - ถนนรัชดาภิเษก"
  },
  {
    "No.": 36,
    "SECT_NAME": "ถนนเจริญราษฎร์",
    "CROSS_ROAD": "ถนนเจริญราษฎร์ - ถนนพระราม 3"
  },
  {
    "No.": 37,
    "SECT_NAME": "แยกถนนรัชดาภิเษก ตัด ถนนนนทรี",
    "CROSS_ROAD": "ถนนรัชดาภิเษก - ถนนนนทรี"
  },
  {
    "No.": 38,
    "SECT_NAME": "แยกถนนสุรศักดิ์ - สาทรเหนือ - ใต้ - เจริญราษฎร์",
    "CROSS_ROAD": "ถนนสุรศักดิ์ - สาทรเหนือ - ใต้ - เจริญราษฎร์"
  },
  {
    "No.": 39,
    "SECT_NAME": "ถนนบรมราชชนนีขาออก",
    "CROSS_ROAD": "ถนนจรัญสินทวงศ์ - ถนนบรมราชชนนี"
  },
  {
    "No.": 40,
    "SECT_NAME": "แยกบุคคโล",
    "CROSS_ROAD": "ถนนมไหสวรรย์ - ถนนเจริญนคร"
  },
  {
    "No.": 41,
    "SECT_NAME": "ปากซอยจรัญสนิทวงศ์ 35",
    "CROSS_ROAD": "ถนนจรัญสนิทวงศ์ - จรัญสนิทวงศ์ 35"
  },
  {
    "No.": 42,
    "SECT_NAME": "ตลาดสดบางซื่อ",
    "CROSS_ROAD": "ถนนเตชะวณิช"
  },
  {
    "No.": 43,
    "SECT_NAME": "ด่วนรามอินทรา - อาจณรงค์",
    "CROSS_ROAD": "ถนนรามอินทรา - ถนนประดิษฐ์มนูธรรม"
  },
  {
    "No.": 44,
    "SECT_NAME": "โรงเรียนรัตนโกสินทร์สมโภช บางเขน",
    "CROSS_ROAD": "ถนน กม.11"
  },
  {
    "No.": 45,
    "SECT_NAME": "ถนนพระราม 4 ขาออกจากแยกรัชดาพระราม 4",
    "CROSS_ROAD": "ถนนพระราม 4 - ถนนรัชดาภิเษก"
  },
  {
    "No.": 46,
    "SECT_NAME": "สะพานข้ามคลองพระโขนง",
    "CROSS_ROAD": "ถนนสุขุมวิท"
  },
  {
    "No.": 47,
    "SECT_NAME": "แยกพระราม 2 (ธนบุรี - ปากท่อ)",
    "CROSS_ROAD": "ถนนสุขสวัสดิ์ - ถนนพระรามที่ 2"
  },
  {
    "No.": 48,
    "SECT_NAME": "แยกสามยอด",
    "CROSS_ROAD": "ถนนเจริญกรุง - มหาไชย"
  },
  {
    "No.": 49,
    "SECT_NAME": "แยกบางพลัด",
    "CROSS_ROAD": "ถนนจรัญสนิทวงศ์ - ราชวิถี - สิรินทร"
  },
  {
    "No.": 50,
    "SECT_NAME": "แยกรัชดาตลาดพลู",
    "CROSS_ROAD": "ถนนรัชดาภิเษก - ถนนเทอดไท"
  },
  {
    "No.": 51,
    "SECT_NAME": "ถ.เจริญนครขาออกจากแยกคลองสาน",
    "CROSS_ROAD": "ถนนเจริญนคร"
  },
  {
    "No.": 52,
    "SECT_NAME": "แยกสวนสมเด็จ (ย่านพหล)",
    "CROSS_ROAD": "ถนนพหลโยธิน - ถนนกำแพงเพชร"
  },
  {
    "No.": 53,
    "SECT_NAME": "แยกหมอมี",
    "CROSS_ROAD": "ถนนเจริญกรุง - มิตรพันธ์"
  },
  {
    "No.": 54,
    "SECT_NAME": "หน้าห้างสรรพสินค้าเดอะมอลล์ ท่าพระ",
    "CROSS_ROAD": "ถนนจรัญสนิทวงศ์ - ถนนเพชรเกษม"
  },
  {
    "No.": 55,
    "SECT_NAME": "แยกจันทรเกษม (เชิงสะพานทางขึ้นรัชดภิเษก - ลาดพร้าว)",
    "CROSS_ROAD": "ถนนรัชดาภิเษก ตัด ถนนลาดพร้าว"
  },
  {
    "No.": 56,
    "SECT_NAME": "แยกวัดธรรมาภิรตาราม (วัดสะพานสูง)",
    "CROSS_ROAD": "ถนนเตชะวณิช"
  },
  {
    "No.": 57,
    "SECT_NAME": "ทางข้ามม้าลายวัดธรรมาภิรตาราม (วัดสะพานสูง)",
    "CROSS_ROAD": "ถนนเตชะวณิช"
  },
  {
    "No.": 58,
    "SECT_NAME": "สะพานสูงประชาราษฎร์ สาย 2",
    "CROSS_ROAD": "ถนนเตชะวณิช"
  },
  {
    "No.": 59,
    "SECT_NAME": "ถนนบางแวกตัดถนนราชพฤกษ์",
    "CROSS_ROAD": "ถนนบางแวก - ถนนราชพฤกษ์"
  },
  {
    "No.": 60,
    "SECT_NAME": "สามแยกบางยี่เรือ",
    "CROSS_ROAD": "ถนนอินทรพิทักษ์ -ถนน เทอดไท"
  },
  {
    "No.": 61,
    "SECT_NAME": "หมู่บ้าน DK",
    "CROSS_ROAD": "ถนนกาญจนาภิเษก"
  },
  {
    "No.": 62,
    "SECT_NAME": "แยกนิลกาจ",
    "CROSS_ROAD": "ถนนกัลปพฤกษ์ - ซอยเอกชัย 36"
  },
  {
    "No.": 63,
    "SECT_NAME": "แยกถนนราชพฤกษ์ตัดเพชรเกษม",
    "CROSS_ROAD": "ถนนราชพฤกษ์ - ถนนเพชรเกษม"
  },
  {
    "No.": 64,
    "SECT_NAME": "ทางลงสะพานต่างระดับถนนเอกชัย",
    "CROSS_ROAD": "ถนนเอกชัย - ถนนบางบอน"
  },
  {
    "No.": 65,
    "SECT_NAME": "วังสวนจิตรลดา (แยกอุทัยเจษฎุทิศ",
    "CROSS_ROAD": "ถนนราชวิถี-ถนนสวรรคโลก"
  },
  {
    "No.": 66,
    "SECT_NAME": "วังสวนจิตรลดา(แยกราชวิถี)",
    "CROSS_ROAD": "ถนนราชวิถี-ถนนพระราม5"
  },
  {
    "No.": 67,
    "SECT_NAME": "วังสวนจิตรลดา(แยกอู่ทองใน)",
    "CROSS_ROAD": "ถนนราชวิถี-ถนนพิชัย"
  },
  {
    "No.": 68,
    "SECT_NAME": "แยกเมืองทอง 1",
    "CROSS_ROAD": "ถนนแจ้งวัฒนะ"
  },
  {
    "No.": 69,
    "SECT_NAME": "ถนนวัดเกาะตัดถนนเลียบคลองสอง (ซอยวัดลุ่ม)",
    "CROSS_ROAD": "ถนนวัดเกาะ-ถนนเลียบคลองสอง (ซอยพหลโยธิน 54/1)"
  },
  {
    "No.": 70,
    "SECT_NAME": "ถนนวัดเกาะตัดถนนเลียบคลองสอง (ถนนวัดเกาะ)",
    "CROSS_ROAD": "ถนนวัดเกาะ-ถนนเลียบคลองสอง (ซอยพหลโยธิน 54/1)"
  },
  {
    "No.": 71,
    "SECT_NAME": "ป้ายรถเมล์สิริรามา",
    "CROSS_ROAD": "ถนนเจริญกรุง"
  },
  {
    "No.": 72,
    "SECT_NAME": "แยกที่ดิน",
    "CROSS_ROAD": "ถนนนวมินทร์-ถนนศรีบูรพา"
  },
  {
    "No.": 73,
    "SECT_NAME": "ทางขึ้น ลงทางด่วนเฉลิมมหานคร",
    "CROSS_ROAD": "ถนนสุรวงศ์"
  },
  {
    "No.": 74,
    "SECT_NAME": "ทางขึ้นลงทางด่วนเฉลิมมหานคร",
    "CROSS_ROAD": "ถนนสีลม"
  },
  {
    "No.": 75,
    "SECT_NAME": "แยกกม. 27",
    "CROSS_ROAD": "ถนนพหลโยธิน (ซอยพหลโยธิน 64)"
  },
  {
    "No.": 76,
    "SECT_NAME": "แยกสน.ดอนเมือง",
    "CROSS_ROAD": "วิภาวดี(ขาออก) - ถนนกำแพงเพชร 6-ถนนเชิดวุฒิอากาศ"
  },
  {
    "No.": 77,
    "SECT_NAME": "แยก กสบ.",
    "CROSS_ROAD": "ถนนสรงประภา - ถนนเชิดวุฒิอากาศ"
  },
  {
    "No.": 78,
    "SECT_NAME": "แยกคลังน้ำมันบาฟส์",
    "CROSS_ROAD": "ถนนวิภาวดีรังสิต(ขาออก)-กำแพงเพชร-เชิดวุฒิกาศ"
  },
  {
    "No.": 79,
    "SECT_NAME": "ทางขึ้นทางด่วนถนนเพลินจิต",
    "CROSS_ROAD": "ถนนเพลินจิต  - ถนนสุขุมวิท"
  },
  {
    "No.": 80,
    "SECT_NAME": "แยกพงษ์พระราม",
    "CROSS_ROAD": "พระรามที่ 4 - พระรามที่ 1 -"
  },
  {
    "No.": 81,
    "SECT_NAME": "แยกพงษ์เพชร",
    "CROSS_ROAD": "ถนนประชาชื่น - ถนนงามวงศ์วาน"
  }
]
		
function tabulate(data, columns) {
	var table = d3.select('body').append('table')
	var thead = table.append('thead')
	var	tbody = table.append('tbody');

	// append the header row
	thead.append('tr')
	  .selectAll('th')
	  .data(columns).enter()
	  .append('th')
	    .text(function (column) { return column; });

	// create a row for each object in the data
	var rows = tbody.selectAll('tr')
	  .data(data)
	  .enter()
	  .append('tr');

	// create a cell in each row for each column
	var cells = rows.selectAll('td')
	  .data(function (row) {
	    return columns.map(function (column) {
	      return {column: column, value: row[column]};
	    });
	  })
	  .enter()
	  .append('td')
	    .text(function (d) { return d.value; });

  return table;
}

// render the tables
tabulate(data, ['No.', 'SECT_NAME', 'CROSS_ROAD']); // 2 column table
// tabulate(data, ['No.']); // table with only date column
// tabulate(data, ['SECT_NAME']); // table with only close column
// tabulate(data, ['CROSS_ROAD']); // table with only close column