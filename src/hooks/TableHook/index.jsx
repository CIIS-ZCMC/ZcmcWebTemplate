import { create } from "zustand";

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
  createData("Brownie", 405, 20.0, 50, 6.7),
  createData("Cheesecake", 298, 12.0, 40, 5.4),
  createData("Churros", 350, 8.0, 35, 3.8),
  createData("Cinnamon Roll", 410, 14.0, 48, 5.2),
  createData("Apple Pie", 290, 10.0, 38, 4.5),
  createData("Muffin", 330, 9.0, 44, 3.9),
  createData("Pancakes", 270, 11.0, 36, 4.1),
  createData("Waffles", 320, 15.0, 40, 5.7),
  createData("Pretzel", 250, 7.0, 33, 3.6),
  createData("Bagel", 280, 9.0, 35, 4.2),
  createData("Danish Pastry", 345, 12.0, 42, 4.8),
  createData("Scones", 310, 10.0, 39, 4.0),
  createData("Macaron", 220, 5.0, 25, 3.0),
  createData("Shortbread", 260, 8.0, 32, 3.5),
  createData("Pudding", 290, 6.0, 30, 3.9),
  createData("Fudge", 270, 14.0, 20, 6.1),
  createData("Truffle", 240, 11.0, 28, 5.3),
  createData("Chocolate Bar", 350, 18.0, 30, 7.0),
  createData("Candy Cane", 150, 0.0, 35, 0.0),
  createData("Gummies", 180, 0.2, 40, 0.1),
  createData("Tiramisu", 320, 12.0, 48, 4.7),
  createData("Mochi", 180, 3.5, 22, 2.8),
  createData("Baklava", 390, 20.0, 30, 5.5),
  createData("Cannoli", 310, 14.0, 35, 4.8),
  createData("Chiffon Cake", 280, 8.0, 34, 4.1),
  createData("Pavlova", 260, 5.0, 31, 3.3),
  createData("Eton Mess", 240, 6.0, 25, 3.2),
  createData("Custard Tart", 310, 11.0, 38, 4.6),
  createData("Lemon Bar", 280, 9.0, 36, 4.0),
  createData("Crepe", 220, 7.0, 28, 3.5),
  createData("Souffle", 270, 8.0, 30, 3.9),
  createData("Parfait", 300, 10.0, 35, 4.5),
  createData("Sorbet", 160, 0.2, 22, 0.0),
  createData("Gelato", 200, 5.0, 24, 3.1),
  createData("Brown Butter Cookie", 330, 12.0, 30, 4.8),
  createData("Peanut Brittle", 400, 20.0, 35, 6.5),
  createData("Marzipan", 380, 15.0, 30, 5.2),
  createData("Profiterole", 290, 9.0, 32, 4.0),
  createData("Crème Brûlée", 310, 13.0, 34, 4.6),
  createData("Choco Lava Cake", 340, 15.0, 40, 6.0),
];

const TableHook = create((set, get) => ({
  content: rows.slice(0, 10),
  limit: 5,
  maxContent: rows.length,
  retrieveNextRecord: (rowsPerPage) => {
    const offset = get().content.length;
    const limit = offset + rowsPerPage;

    set((state) => ({
      content: [...state.content, ...rows.slice(offset, limit)],
    }));

    // Integrate API here to retrieve next value
  },
  refresh: (offset, rowsPerPage) => {
    const limit = rowsPerPage * 2;

    // Integrate API here to retrieve additional data.
    // if (limit > rows.length) {
    return set({ content: rows.slice(offset, limit * 2) });
    // }
  },
}));

export default TableHook;
