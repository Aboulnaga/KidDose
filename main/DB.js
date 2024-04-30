//  دي قاعدة البيانات لكل الادوية في الموقع
// {
//     id: لازم كل دوا يكون ليه id مختلف
//     medicine: اسم الدوا
//     dosageFun: function (weight){ دي المعادلة المسؤولة عن الحسة بتاعة الجرعه
//       return 20 * weight * (5 / 200); // weight هنا هنغير ارقام الحسبة بتاعة الدوا بس مش هنشيل كلمة
//       //weight دي هيتحط فيها وزن الطفل من الموقع نفسه
//     },
//   },

export const DB = [
  {
    id: 1,
    medicine: "this is medicine 1",
    dosageFun: function (weight) {
      return 20 * weight * (5 / 200);
    },
  },

  {
    id: 2,
    medicine: "this is medicine 2",
    dosageFun: weight => {
      return 20 * weight * (5 / 250);
    },
  },
  {
    id: 3,
    medicine: "this is medicine 3",
    dosageFun: weight => {
      return 15 * weight * (10 / 150);
    },
  },
  {
    id: 4,
    medicine: "this is medicine 4",
    dosageFun: weight => {
      return 20 * weight * (5 / 200);
    },
  },
  {
    id: 5,
    medicine: "this is medicine 5",
    dosageFun: weight => {
      return 10 * weight * (5 / 200);
    },
  },
  {
    id: 6,
    medicine: "this is medicine 6",
    dosageFun: weight => {
      return 10 * weight * (5 / 250);
    },
  },
  {
    id: 7,
    medicine: "this is medicine 7",
    dosageFun: weight => {
      return 25 * weight * (15 / 100);
    },
  },
  {
    id: 8,
    medicine: "this is medicine 8",
    dosageFun: weight => {
      return 20 * weight * (5 / 200);
    },
  },
  {
    id: 9,
    medicine: "this is medicine 9",
    dosageFun: weight => {
      return 20 * weight * (5 / 200);
    },
  },
  {
    id: 10,
    medicine: "this is medicine 10",
    dosageFun: weight => {
      return 20 * weight * (5 / 200);
    },
  },
  {
    id: 11,
    medicine: "this is medicine 11",
    dosageFun: weight => {
      return 20 * weight * (5 / 200);
    },
  },
  {
    id: 12,
    medicine: "this is medicine 12",
    dosageFun: weight => {
      return 20 * weight * (5 / 200);
    },
  },
  {
    id: 13,
    medicine: "this is medicine 13",
    dosageFun: weight => {
      return 20 * weight * (5 / 200);
    },
  },
  {
    id: 14,
    medicine: "this is medicine 14",
    dosageFun: weight => {
      return 20 * weight * (5 / 200);
    },
  },
];
