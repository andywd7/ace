[Code](#/Components/Button?id=code-)
[Usage](#/Components/Button?id=usage-)

## Code {#}

### Variants
```
<b-btn>Secondary (default)</b-btn>
<b-btn variant="primary">Primary</b-btn>
<b-btn variant="danger">Danger</b-btn>
<b-btn variant="success">Success</b-btn>
<b-btn variant="warning">Warning</b-btn>
<b-btn variant="subtle">Subtle</b-btn>
```

### Size
```
<b-btn>Default</b-btn>
<b-btn size="sm">Small</b-btn>
```

### Disabled
```
<b-btn disabled>Secondary</b-btn>
<b-btn variant="primary" disabled>Primary</b-btn>
<b-btn variant="danger" disabled>Danger</b-btn>
<b-btn variant="success" disabled>Success</b-btn>
<b-btn variant="warning" disabled>Warning</b-btn>
<b-btn variant="subtle" disabled>Subtle</b-btn>
```

### Pressed
```
<b-btn pressed>Secondary</b-btn>
<b-btn variant="primary" pressed>Primary</b-btn>
<b-btn variant="danger" pressed>Danger</b-btn>
<b-btn variant="success" pressed>Success</b-btn>
<b-btn variant="warning" pressed>Warning</b-btn>
<b-btn variant="subtle" pressed>Subtle</b-btn>
```

### Icons
```
<b-btn>
  <nt-icon icon="search" icon-position="left">Search</nt-icon>
</b-btn>
<b-btn size="sm">
  <nt-icon icon="trash">Delete</nt-icon>
</b-btn>
```

## Usage {#}

[Variants](#/Components/Buttons?id=variants-)
[Danger button usage](#/Components/Buttons?id=danger-)

### Variants {#}
| Button type        | Purpose
| ------------------ |
| _Secondary_        | For secondary actions on each page. |
| _Primary_          | For the principal call to action on the page. |
| _Danger_           | When an action has potentially destructive effects on the user's data (delete, remove, etc). |
| _Subtle_           | When an action does not require primary dominance on the page. |

### Danger button usage {#}
Danger buttons have a different visual style to inform users of potentially destructive actions they are about to take. If using the danger button as a standalone, we recommend styling it as a secondary button.
