--- 
date: "2023-08-06"
author: "Chun-Hao Lai"
title: "Backbone Source Code Reading"
slug: "backbone-source-code-reading"
---

Here are some notes I took when I was reading the source code of Backbone.js.

## How to implement the listenTo method

```javascript
object.listenTo(other, event, callback)  
```

The listenTo method is used to bind a callback function to an event on another object. The callback will always be called whenever the event is fired.

Instead of checking the whole list of events every time an event is fired as following.

```javascript
class MyObject {
  static events = [];

  listenTo(other, event, callback) {
    // Add the event, target object, and //callback to the global list of events
    MyObject.events.push({ other, event, callback });
  }

  triggerEvent(eventName, ...args) {
    // For each event in the global list...
    MyObject.events.forEach(e => {
      // If the event name and target object match...
      if (e.event === eventName && e.other === this) {
        // Call the callback
        e.callback(...args);
      }
    });
  }
}
```

Backbone uses a inverse approach. It keeps a list of events on the target object. Whenever an event is fired, Backbone will check the list of events on the target object and call the corresponding callbacks.

```javascript
class MyObject {
  constructor() {
    this.listeners = {};
  }

  listenTo(other, event, callback) {
    // If there's not already a list of listeners for this event, create one
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    // Add the callback to the list of listeners for this event
    this.listeners[event].push(callback);

    // When the event is triggered on the other object, call the callback
    other.on(event, callback);
  }
}
```

## SPA history management

How to implement the history management in a SPA?

- Use the `popstate` event to detect the change of the path part of the URL.
- Use the `hashchange` event to detect the change of the hash part of the URL.
- Use the polling technique to detect the change of the path part of the URL in browsers that don't support the `popstate` or `hashchange` event.

A brief of implementation of the above three methods:

1. **popstate event**: The `popstate` event is fired when the active history entry changes, except in the case of `pushState()` or `replaceState()` operations. You can add an event listener for the `popstate` event and update your application state based on the `state` object that is passed to the event handler.

```javascript
window.addEventListener('popstate', function(event) {
  // event.state is the state object passed to pushState
  console.log("state: ", event.state);
});
```

2. **hashchange event**: The `hashchange` event is fired when the fragment identifier of the URL (the part of the URL that follows the # symbol) changes. You can add an event listener for the `hashchange` event and update your application state based on the new hash.

```javascript
window.addEventListener('hashchange', function() {
  // location.hash is the new hash
  console.log("hash: ", location.hash);
});
```

3. **polling**: For browsers that don't support the `popstate` or `hashchange` events, you can use a polling technique to check if the URL has changed. This involves periodically checking the current URL and comparing it to the last known URL.

```javascript
let lastURL = location.href;
setInterval(function() {
  if (lastURL !== location.href) {
    // The URL has changed
    console.log("URL: ", location.href);
    lastURL = location.href;
  }
}, 1000); // Check every second
```

In all these cases, when a change is detected, Backbone would typically update your application state to reflect the new URL. This might involve showing or hiding different parts of the UI, fetching data based on the new URL, etc.
