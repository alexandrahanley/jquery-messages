## jQuery Inbox

Get as many of these done as you can.  If you don't finish with your pair, do the rest as homework.

**User can star a message**

User clicks the star next to a message

- Remove the `fa-star-o` class and add the `fa-star` class

**User can unstar a message**

User clicks the star next to a message

- Remove the `fa-star` class and add the `fa-star-o` class

**User select all messages**

User clicks the checkbox button in the upper left.

- Add the `selected` class to all `message` divs
- Change the toolbar icon to `fa-check-square-o`

**User can select a message**

User checks the checkbox next to an individual message.

- Add the `selected` class to the message div
- The following elements should become enabled
  - "Mark as read"
  - "Mark as unread"
  - "Apply Label"
  - "Remove Label"
- If all messages are selected
  - Checkbox in the toolbar should get the `fa-check-square-o` class
- If some messages are still unselected
  - Checkbox in the toolbar should get the `fa-minus-square-o` class

**User can unselect a message**

User unchecks the checkbox next to an individual message.

- Remove the `selected` class from the message div
- If all messages are unselected
  - The following elements should become disabled
    - "Mark as read"
    - "Mark as unread"
    - "Apply Label"
    - "Remove Label"
  - Checkbox in the toolbar should get the "fa-square-o" class
- If some messages are still unselected
  - Checkbox in the toolbar should get the "fa-minus-square-o" class

**User can mark selected messages as read**

User selects one or more messages and clicks "Mark As Read"

- To all the `.message` divs that are selected
  - Add the `read` class
  - Remove the `unread` class
- Update the unread message count in the upper right
  - "1 unread message" if there's only one left
  - "n unread messages" if there's more than one left

**User can mark selected messages as unread**

User selects one or more messages and clicks "Mark As Unread"

- To all the `.message` divs that are selected
  - Remove the `read` class
  - Add the `unread` class
- Update the unread message count in the upper right
  - "1 unread message" if there's only one left
  - "n unread messages" if there's more than one left

**User can apply labels to selected messages**

User selects one or more messages and chooses an option from "Apply Label"

- To all the `.message` divs that are selected
  - Add a label with the selected name (do not add duplicates)
- Reset the dropdown to say "Add a Label" (that is, select the first option again)

**User can remove labels from selected messages**

User selects one or more messages and chooses an option from "Remove Label"

- To all the `.message` divs that are selected
  - Remove the label that matches that name (if the selected message doesn't have the label, it's ok - just do nothing )
- Reset the dropdown to say "Remove a Label" (that is, select the first option again)

**User can delete messages**

User selects one or more messages and click the "Trash" button

- To all the `.message` divs that are selected
  - Remove the message div from the dom
- Update the unread count to be accurate (in case you deleted an unread message)
- Disable all of the toolbar buttons that should be disabled

### Stretch

**Add AJAX calls to _all_ actions**

Any change to data should be maintained after reloading the page.  You must make AJAX calls to make this happen.

**Remember which messages were selected after page reload**

Do this on the client side, not the server side.

_HINT_ - lookup SessionStorage
