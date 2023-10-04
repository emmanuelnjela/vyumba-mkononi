import CreatableSelect from 'react-select/creatable';

function ReactSelect({options, placeholder}) {
    return <CreatableSelect placeholder={placeholder} isClearable options={options} />
}

export default ReactSelect