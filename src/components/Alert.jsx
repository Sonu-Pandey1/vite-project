/* eslint-disable react/prop-types */
export default function Alert(props) {
    console.log(props)
    return (
                props.msg && <div
                className={`alert alert-${props.msg.type} alert-dismissible fade show`}
                role="alert">
                <strong>{props.msg.type}</strong>:{props.msg.msg}
                </div>
       
    );
}
