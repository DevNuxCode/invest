const Map: React.FC = () => {
  return (
        <div style={{ display: 'flow-root', justifyContent: 'center', margin: '2rem 0' }}>
          <iframe
            width="480"
            height="500"
            src="https://cybermap.kaspersky.com/es/widget/dynamic/dark"
            frameBorder="0"
            title="Kaspersky Cybermap Widget"
            style={{ border: 0 }}
          />
        </div>
        )
    };


export default Map;