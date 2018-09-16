class Singleton extends Component {
    constructor(){
        this.z=0;
    }
    increment = () => {
        ++this.z;
    }
}

export default new Singleton();


// https://k94n.com/es6-modules-single-instance-pattern
// https://stackoverflow.com/questions/48366563/es6-singleton-vs-instantiating-a-class-once

//http://www.adam-bien.com/roller/abien/entry/singleton_pattern_in_es6_and
// https://medium.com/@dmnsgn/singleton-pattern-in-es6-d2d021d150ae
