import shinfuji from './midea/shinfuji.png';
import addFriends from './midea/AddFriends.png';
import buggy from './midea/buggy.png';
import zainStore from './midea/zainStore.png';
import zainWeather from './midea/zainWeather.png';
import zainTodoApp from './midea/zainTodoApp.png';





const MyWorks = () => {
    return (
        <div className="my-works">
            <h2>I Welcome you to see my works</h2>
            <div className="my-work">
                <a href="https://zainsyed.pythonanywhere.com/">
                    <h2>Website for Shinfuji co ltd</h2>
                    <p>When you wante to make frontend and backend all with yorself.</p>
                    <p>So you make one.</p>
                    <img src={shinfuji} alt="shinfuji co ltd" />
                </a>
            </div>



            <div className="my-work">
                <a href="https://zain-store.herokuapp.com/">
                    <h2>Zain store</h2>
                    <p>When you want your own store. now we are working on payment and checkout.</p>
                    <p>So you make one.</p>
                    <img src={zainStore} alt="zain store" />
                </a>
            </div>

            <div className="my-work">
                <a href="https://zain-weather.netlify.app/">
                    <h2>Zain Weather</h2>
                    <p>When you want your own weather app.</p>
                    <p>So you make one.</p>
                    <img src={zainWeather} alt="zain weather" />
                </a>
            </div>

            <div className="my-work">
                <a href="https://zain-todo-app.netlify.app/">
                    <h2>Zain todo app</h2>
                    <p>When you want to plan for what to do.</p>
                    <p>So you make one.</p>
                    <img src={zainTodoApp} alt="zain todo app" />
                </a>
            </div>



            <div className="my-work">
                <a href="https://tranquil-forest-65736.herokuapp.com/users/sign_up">
                    <h2>Save your friends</h2>
                    <p>When you wante to have some place where you want to save your friends in a good security.</p>
                    <p>So you make one.</p>
                    <img src={addFriends} alt="Save Yor Friends" />
                </a>
            </div>

            <div className="my-work">
                <a href="https://github.com/shahzain88/python/blob/master/app_jp_buggy.py">
                    <h2>Buggy your friend</h2>
                    <p>When you wante to have nice friend who listins to you.</p>
                    <p>So you make one.</p>
                    <p>Buggy is an Al it will talk with you and it will make your desktop work easy. <br /> searching and opening your liking Queri by just your voice.</p>
                    <img src={buggy} alt="your friend Buggy" />
                </a>
            </div>
        </div>
    );
}

export default MyWorks;
