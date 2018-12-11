# Vue
### Computed Properties & Methods

In the most cases, their performances are the same. However, in some instances just like:

```vue
computed: {
	now: function(){
		return Date.now();
	}
};
```



The value of 'now' wouldn't update. Because **computed properties are cached based on their dependencies**. A computed property will only re-evaluate when some of its dependencies have changed. 

In comparison, a method invocation will **always** run the function whenever a re-render happens.

![Computed Properties & Methods](./ComputedProperties/methods&ComputedProperties.png)

So only if we have an expensive property to calculate, we use **Computed Properties** to cache it in case of calculating it again. Otherwise, we should use **methods**.



### v-if vs v-show

V-if is "real" and lazy:

- The event and child components inside the conditional block **are properly destroyed and re-created** during the toggle.
- If the condition is false on initial render, **it'll do nothing until the condition becomes true for the first time**.

V-show element **is always rendered** regardless of initial condition.

Generally speaking, **v-if has higher toggle costs** while **v-show has higher initial render costs**.

So prefer v-show if the component is toggled very often. Otherwise, you should choose v-if.



##### Tips: Do not use v-if with v-for on the same element:

​	**V-if has a higher priority than v-if**, so the template:

```html
<ul>
  <li
    v-for="user in users"
    v-if="user.isActive"
    :key="user.id"
  >
    {{ user.name }}
  <li>
</ul>
```

Will be evaluated similar to:

```js
this.users.map(function (user) {
  if (user.isActive) {
    return user.name
  }
})
```

We have to iterate over the entire list every time we re-render, whether or not the set of active users has changed.



By iterating over a **computed property** instead, like this:

```js
computed: {
  activeUsers: function () {
    return this.users.filter(function (user) {
      return user.isActive
    })
  }
}
```

```html
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  <li>
</ul>
```

######Benefits:

- The filtered list will **only be re-evaluated if there are relevant changes** to the 'users' array, making filtering much more efficient.
- We only iterate over active users during render.
- Logic decoupled.(解耦)



We can also get similar benefits from moving the v-if to a container element, then we're no longer checking shouldShowUsers for every user in the list. Instead, we check it once and don't even evaluate the v-for if shouldShowUsers is false.

```html
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  <li>
</ul>
```

