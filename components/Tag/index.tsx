export default function Tag({name, children}) {
  return (
    <section>
        <span>{`<${name}>`}</span>
            <>{children}</>
        <span>{`</${name}>`}</span>

        <style jsx>{`
            section {
                display: flex;
                flex-flow: row wrap;
            }

            span {
                color: #d8d0bb;
                font-family: Damion;
                font-size: 12px;
            }

            span:first-child {
                align-self: flex-start;
                margin-right: 5px;
            }

            span:last-child {
                align-self: flex-end;
                margin-left: 5px;
            }
        `}</style>
    </ section>
  );
}
