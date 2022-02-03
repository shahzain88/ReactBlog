import shinfuji from './midea/shinfuji.png';
import AddFriends from './midea/AddFriends.png';
import Buggy from './midea/buggy.png';


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
                <a href="https://tranquil-forest-65736.herokuapp.com/users/sign_up">
                    <h2>Save your friends</h2>
                    <p>When you wante to have some place where you want to save your friends in a good security.</p>
                    <p>So you make one.</p>
                    <img src={AddFriends} alt="Save Yor Friends" />
                </a>
            </div>

            <div className="my-work">
                <a href="https://github.com/shahzain88/python/blob/master/app_jp_buggy.py">
                    <h2>Buggy your friend</h2>
                    <p>When you wante to have nice friend who listins to you.</p>
                    <p>So you make one.</p>
                    <p>Buggy is an Al it will talk with you and it will make your desktop work easy. <br /> searching and opening your liking Queri by just your voice.</p>
                    <img src={Buggy} alt="your friend Buggy" />
                </a>
            </div>
        </div>
    );
}

export default MyWorks;