import { useNavigate } from "react-router-dom";

const useScrollToRef = () => {

    const navigate = useNavigate();

    const goToRef = (ref) => {

        const scroll = () => ref.current?.scrollIntoView({ behavior: 'smooth'});
        console.log(ref)

        // if(location.pathname === '/') {
        //     scroll();
        //     return;
        // }

        if(location.pathname === '/services') {
            scroll();
            return;
        }

        navigate('/services');

        setTimeout(() => {
            if(ref.current.id === 'home') window.scrollTo(0, 0);
            else scroll();
        }, 500);
    }

    return { goToRef };
}

export default useScrollToRef;