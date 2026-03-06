import { Select, SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectLabel } from '../../atoms/Select/Select';

export function SelectShowcase() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Sizes */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Sizes</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: 320 }}>
          <Select>
            <SelectTrigger size="sm" placeholder="Small (32px)" />
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
              <SelectItem value="b">Option B</SelectItem>
              <SelectItem value="c">Option C</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger size="md" placeholder="Medium (40px)" />
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
              <SelectItem value="b">Option B</SelectItem>
              <SelectItem value="c">Option C</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger size="lg" placeholder="Large (48px)" />
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
              <SelectItem value="b">Option B</SelectItem>
              <SelectItem value="c">Option C</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* With groups */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>Grouped Options</div>
        <div style={{ maxWidth: 320 }}>
          <Select>
            <SelectTrigger placeholder="Choose a course" />
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Science</SelectLabel>
                <SelectItem value="physics">Physics</SelectItem>
                <SelectItem value="chemistry">Chemistry</SelectItem>
                <SelectItem value="biology">Biology</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Arts</SelectLabel>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="history">History</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* States */}
      <div>
        <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>States</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: 320 }}>
          <Select>
            <SelectTrigger placeholder="Default" />
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger placeholder="Error state" error />
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
            </SelectContent>
          </Select>
          <Select disabled>
            <SelectTrigger placeholder="Disabled" />
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
