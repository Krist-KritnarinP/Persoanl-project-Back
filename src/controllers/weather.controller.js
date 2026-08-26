import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const predictTripWeather = async (req, res, next) => {
  try {
    const { location, startDate, endDate, activities } = req.body;

    const targetLocation = location || "ไม่ระบุสถานที่";
    const start = startDate || "ไม่ระบุวันเริ่มต้น";
    const end = endDate || "ไม่ระบุวันสิ้นสุด";
    const acts = Array.isArray(activities) && activities.length > 0 
      ? JSON.stringify(activities) 
      : "ไม่มีกิจกรรมระบุไว้";

    const prompt = `
      ช่วยประเมินสภาพอากาศและพยากรณ์อากาศล่วงหน้าสำหรับทริปท่องเที่ยว:
      - สถานที่: ${targetLocation}
      - ช่วงวันที่: ${start} ถึง ${end}
      - รายการกิจกรรม/เวลา: ${acts}

      พยากรณ์เฉพาะสภาพอากาศที่คาดว่าจะเจอในแต่ละช่วงเวลาของวันของแต่ละสถานที่เท่านั้น สรุปเป็นช่วงวัน เช้ากลางวันและเย็น ไม่ต้องใส่คำแนะนำอะไรเพิ่มแค่สรุปสภาพอากาศเท่านั้น
      แบบย่่อที่สุดไม่เกิน 20 คำ
    `;

    // 🔑 เปลี่ยนเป็น gemini-3.6-flash ตามที่ API แจ้งแนะนำ
    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash", 
      contents: prompt,
    });

    res.status(200).json({
      success: true,
      prediction: response.text,
    });
  } catch (error) {
    console.error("Gemini Weather Error:", error);
    next(error);
  }
};