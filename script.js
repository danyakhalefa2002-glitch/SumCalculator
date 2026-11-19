const calculateButton = document.getElementById("calculateButton");
const result = document.getElementById("result");

calculateButton.addEventListener("click", function () {
  const userInput = prompt("Enter a number:");

  // إذا ضغط المستخدم على Cancel نوقف العملية
  if (userInput === null) {
    return;
  }

  // التأكد من أن المستخدم لم يترك الإدخال فارغًا
  if (userInput.trim() === "") {
    result.textContent = "please enter a number. ";
    return;
  }

  // تحويل القيمة المدخلة من نص إلى رقم
  const number = Number(userInput);

  // التأكد من أن القيمة المدخلة رقم صالح
  if (isNaN(number)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  // استدعاء الدالة وحفظ النتيجة التي ترجعها
  const total = calculateSum(number);

  // عرض المجموع النهائي في الصفحة
  result.textContent = total;
});

// دالة لحساب مجموع الأعداد من 1 حتى الرقم المدخل
function calculateSum(number) {
  // نبدأ المجموع من صفر ثم نضيف إليه الأعداد
  let sum = 0;

  // تكرار العملية من 1 حتى الوصول إلى الرقم المطلوب
  for (let i = 1; i <= number; i++) {
    // إضافة الرقم الحالي إلى المجموع
    sum = sum + i;
  }

  // إرجاع المجموع النهائي بعد انتهاء الحلقة
  return sum;
}
