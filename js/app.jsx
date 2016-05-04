var App = React.createClass({
  getInitialState: function() {
    return (
      {
        blogs : [{title: '', excerpt: '', content:'', id: 1 }],
        cases : [
          {
            title: 'Case nummer en',
            excerpt: 'Forskjellig ingress her også!',
            content:'Alt er helt ulikt. Innhold case to.',
            id: 1
          },
          {
            title: 'Case TO',
            excerpt: 'Ingress andre case!',
            content:'Innhold tredje case.',
            id: 2
          }
        ],
        active: [0],
        contentScope: 'blogs'
      });
  },

  rawHTML: function(text) {
    return {__html: text.rendered };
  },

  updateMainView: function (i, scopetype) {
    this.setState({active: i});
    this.setState({contentScope: scopetype});
  },


  componentDidMount: function() {
    $.get(this.props.blogSource, function (result) {
      if (this.isMounted()) {
        this.setState({
          blogs: result
        });
      }
    }.bind(this));

    $.get(this.props.caseSource, function (result) {
      if (this.isMounted()) {
        this.setState({
          cases: result
        });
      }
    }.bind(this));
  },


  render: function() {
    var active = this.state.active;
    var contentScope = this.state.contentScope;
    return (
      <div id="content">
	      <MastHead />

        <div id="sidebar">
          <SidebarElement location={"cases"} parent={this} />
          <SidebarElement location={"projects"} parent={this} />
        </div>
        
	      <MainView article={this.state[contentScope][active]} />
      </div>
    );
  }
});

var MainView = React.createClass({

  rawHTML: function(text) {
    return {__html: text.rendered };
  },

  render: function() {
    return(
      <main id="main">
        <h1 dangerouslySetInnerHTML={this.rawHTML(this.props.article.title)} />
        <div dangerouslySetInnerHTML={this.rawHTML(this.props.article.content)} />
      </main>
    );
  }
});

var MastHead = React.createClass({

  rawHTML: function(text) {
    return {__html: text.rendered };
  },
  render: function(){
  	return(
  		<div id="masthead">
  			<h1>olemak</h1>
  		</div>
  	);
  }
});

var SidebarElement = React.createClass({
  
  rawHTML: function(text) {
    return {__html: text.rendered };
  },

  updateMainView: function (i, scopetype) {
    this.setState({active: i});
    this.setState({contentScope: scopetype});
  },

  render: function() {
    var loc = this.props.location;
    daddy = this.props.parent;
//    console.log(daddy);

    return(
          <ul id={loc}>
          <h3>Projects</h3>
          {this.props.parent.state.cases.map(function(singleCase, i) {
            return (
              <li onClick={this.props.parent.updateMainView.bind(this, i, loc)}>
                <a href="#main" key={i}>
                  <h4 dangerouslySetInnerHTML={this.rawHTML(singleCase.title)} />
                </a>
              </li>
            );
          }, this)}
        </ul>

    );
  }
})


React.render(
  <App 
  blogSource='http://dev.olemak.no/wordpress/wp-json/wp/v2/posts?filter[category_name]=blogg&per_page=4'
  caseSource='http://dev.olemak.no/wordpress/wp-json/wp/v2/posts?filter[category_name]=case&per_page=4' />,
  document.getElementById('body')
);