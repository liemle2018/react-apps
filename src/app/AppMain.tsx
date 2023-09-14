// import Caro from "../views/Caro";
import Todo from "../views/Todo";
// import FilterableProductTable from "../views/FilterableProductTable";

import ThemeProvider from "../providers/ThemeProvider";

function AppMain() {
  return (
    <ThemeProvider>
      <Todo />
    </ThemeProvider>
  );
}

export default AppMain;
