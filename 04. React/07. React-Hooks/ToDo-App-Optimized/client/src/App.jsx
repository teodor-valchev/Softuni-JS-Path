import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import '../public/styles.css'


function App() {
    return (
        <>
            <Header />
            {/* Main content  */}
            <main className="main">
                <ToDoList />
            </main>
            <Footer />
        </>
    );
}

export default App;
