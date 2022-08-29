**Uncontrolled Components**
this are component that keeps tracks of their own states and release data only when some event occurs. (eg submit event for HTML form)
here the only time we are going to know what the input form contain is when the form is submitted

**controlled Components**
this are components where the parent keeps tracks the  states and passes the state to a controlled Components as a props. Note control component never keeps tracts of their own state (eg the use of ```useState``` hooks with text inputs).