import Chat from './components/chat/Chat';
import Detail from './components/detail/Detail';
import List from './components/list/List';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';

const App = () => {
    const user = true;
    return (
        <div className="container backdrop-blur-md bg-blue-800/30 w-[95vw] h-[90vh] rounded-xl flex">
            {user ? (
                <>
                    <List />
                    <Chat />
                    <Detail />
                </>
            ) : (
                <Login />
        )}
        <Notification />
        </div>
    );
};

export default App;
