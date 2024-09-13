const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const langs = ["js","c","java","cpp"]

for(const key in langs) {
    //console.log(langs[key]);
    
}

// const map = new Map()

// map.set("js","javascript")
// map.set("cpp","c plus plus")
// map.set("java", "java language")
// map.set("c","c language")

// for(const key in map) {
//    console.log(key);
    
// }
// Maps are not iterable.
