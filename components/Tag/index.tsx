import styles from './styles';

export default function Tag({ name, children }) {
  return (
    <section>
      <span>{`<${name}>`}</span>
      <>
        {children}
      </>
      <span>{`</${name}>`}</span>

      <style jsx>{styles}</style>
    </section>
  );
}
