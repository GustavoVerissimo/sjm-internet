type props = {
    titleButton: string;
}
export default function Button({titleButton}: props) {
    return(
        <button className="bg-(--color-button-blue) text-white px-3 py-2 rounded-3xl">{titleButton}</button>
    )
};