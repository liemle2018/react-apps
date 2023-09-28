// import Caro from "../views/Caro";
import Todo from "../views/Todo";
// import FilterableProductTable from "../views/FilterableProductTable";

import ThemeProvider from "../providers/ThemeProvider";
import TodoProvider from "../providers/TodoProvider";

function AppMain() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default AppMain;
