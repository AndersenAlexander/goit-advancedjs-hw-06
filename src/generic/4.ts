/*
Use generics and interfaces to fix the error in the following classes:
*/

class Component {
  constructor(public props: T) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};

// 2.4
interface PageProps {
  title: string;
  // more fields if needed
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PageProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}
