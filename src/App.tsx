import { BrowserRouter } from "react-router-dom"
import AuthRouter from "@/routers/utils/auth-router";
import Router from "@/routers/config-router";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <AuthRouter>
        <Router />
      </AuthRouter>
    </BrowserRouter>
  )
}

export default App;
