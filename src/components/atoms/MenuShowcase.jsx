import { useState } from 'react';
import { Menu, MenuItem, MenuGroup, MenuDivider } from '../../atoms/Menu/Menu';
import {
  FileText, Settings, User, Trash2, Copy, Scissors,
  Clipboard, LogOut, ChevronRight, Mail, Bell, Shield,
  Download, Share, Star, Archive, Eye, EyeOff, Bold,
  Italic, Underline,
} from 'lucide-react';
import { Badge } from '../../atoms/Badge/Badge';

const sty = {
  label: {
    fontSize: '11px',
    fontWeight: 500,
    color: 'var(--ink-3)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    marginBottom: '12px',
  },
  demoArea: {
    background: 'var(--card-bg)',
    border: '1px solid var(--rule)',
    borderRadius: 'var(--radius)',
    padding: '24px',
  },
  row: {
    display: 'flex',
    gap: '24px',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  menuWrap: {
    width: '260px',
    flexShrink: 0,
  },
};

export function MenuShowcase() {
  const [checkedItems, setCheckedItems] = useState({
    notifications: true,
    sounds: false,
    analytics: true,
  });

  const [radioValue, setRadioValue] = useState('comfortable');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* 1. Basic with icons + shortcuts */}
      <div>
        <div style={sty.label}>Basic menu with icons &amp; shortcuts</div>
        <div style={sty.demoArea}>
          <div style={sty.menuWrap}>
            <Menu panel>
              <MenuItem icon={FileText} shortcut="Cmd+N">New File</MenuItem>
              <MenuItem icon={Copy} shortcut="Cmd+C">Copy</MenuItem>
              <MenuItem icon={Scissors} shortcut="Cmd+X">Cut</MenuItem>
              <MenuItem icon={Clipboard} shortcut="Cmd+V">Paste</MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* 2. With descriptions */}
      <div>
        <div style={sty.label}>With descriptions (two-line items)</div>
        <div style={sty.demoArea}>
          <div style={sty.menuWrap}>
            <Menu panel>
              <MenuItem icon={Download} description="Save a copy to your device">
                Download
              </MenuItem>
              <MenuItem icon={Share} description="Send via email or link">
                Share
              </MenuItem>
              <MenuItem icon={Archive} description="Move to archive folder">
                Archive
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* 3. Destructive item */}
      <div>
        <div style={sty.label}>Destructive item</div>
        <div style={sty.demoArea}>
          <div style={sty.menuWrap}>
            <Menu panel>
              <MenuItem icon={Settings}>Settings</MenuItem>
              <MenuItem icon={User}>Profile</MenuItem>
              <MenuDivider />
              <MenuItem icon={Trash2} variant="destructive">Delete Account</MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* 4. Checkbox items */}
      <div>
        <div style={sty.label}>Checkbox items (interactive)</div>
        <div style={sty.demoArea}>
          <div style={sty.menuWrap}>
            <Menu panel>
              <MenuItem
                role="menuitemcheckbox"
                checked={checkedItems.notifications}
                onCheckedChange={(v) => setCheckedItems((s) => ({ ...s, notifications: v }))}
                icon={Bell}
              >
                Notifications
              </MenuItem>
              <MenuItem
                role="menuitemcheckbox"
                checked={checkedItems.sounds}
                onCheckedChange={(v) => setCheckedItems((s) => ({ ...s, sounds: v }))}
                icon={Mail}
              >
                Sounds
              </MenuItem>
              <MenuItem
                role="menuitemcheckbox"
                checked={checkedItems.analytics}
                onCheckedChange={(v) => setCheckedItems((s) => ({ ...s, analytics: v }))}
                icon={Eye}
              >
                Analytics
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* 5. Radio items */}
      <div>
        <div style={sty.label}>Radio items (interactive)</div>
        <div style={sty.demoArea}>
          <div style={sty.menuWrap}>
            <Menu panel>
              <MenuGroup label="Density">
                {['compact', 'comfortable', 'spacious'].map((val) => (
                  <MenuItem
                    key={val}
                    role="menuitemradio"
                    checked={radioValue === val}
                    onCheckedChange={() => setRadioValue(val)}
                  >
                    {val.charAt(0).toUpperCase() + val.slice(1)}
                  </MenuItem>
                ))}
              </MenuGroup>
            </Menu>
          </div>
        </div>
      </div>

      {/* 6. Groups with dividers */}
      <div>
        <div style={sty.label}>Groups with dividers and labels</div>
        <div style={sty.demoArea}>
          <div style={sty.menuWrap}>
            <Menu panel>
              <MenuGroup label="Edit">
                <MenuItem icon={Copy} shortcut="Cmd+C">Copy</MenuItem>
                <MenuItem icon={Scissors} shortcut="Cmd+X">Cut</MenuItem>
                <MenuItem icon={Clipboard} shortcut="Cmd+V">Paste</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup label="View">
                <MenuItem icon={Eye}>Show Preview</MenuItem>
                <MenuItem icon={EyeOff}>Hide Sidebar</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuItem icon={LogOut} variant="destructive">Sign Out</MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* 7. Disabled items */}
      <div>
        <div style={sty.label}>Disabled items</div>
        <div style={sty.demoArea}>
          <div style={sty.menuWrap}>
            <Menu panel>
              <MenuItem icon={Copy}>Copy</MenuItem>
              <MenuItem icon={Scissors} disabled>Cut (disabled)</MenuItem>
              <MenuItem icon={Clipboard}>Paste</MenuItem>
              <MenuItem icon={Trash2} variant="destructive" disabled>Delete (disabled)</MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* 8. Active/selected state */}
      <div>
        <div style={sty.label}>Active / selected state</div>
        <div style={sty.demoArea}>
          <div style={sty.menuWrap}>
            <Menu panel>
              <MenuItem icon={FileText}>Documents</MenuItem>
              <MenuItem icon={Star} active>Favourites</MenuItem>
              <MenuItem icon={Archive}>Archive</MenuItem>
              <MenuItem icon={Trash2}>Trash</MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* 9. Trailing content */}
      <div>
        <div style={sty.label}>Trailing content (badges, chevrons)</div>
        <div style={sty.demoArea}>
          <div style={sty.menuWrap}>
            <Menu panel>
              <MenuItem icon={Mail} trailing={<Badge variant="info">3</Badge>}>
                Inbox
              </MenuItem>
              <MenuItem icon={Bell} trailing={<Badge variant="warning">12</Badge>}>
                Notifications
              </MenuItem>
              <MenuItem icon={Settings} trailing={<ChevronRight size={14} style={{ color: 'var(--color-text-tertiary)' }} />}>
                Preferences
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* 10. Sizes */}
      <div>
        <div style={sty.label}>Sizes (sm, md, lg)</div>
        <div style={sty.demoArea}>
          <div style={sty.row}>
            {['sm', 'md', 'lg'].map((size) => (
              <div key={size} style={sty.menuWrap}>
                <div style={{ ...sty.label, marginBottom: '8px' }}>{size.toUpperCase()}</div>
                <Menu panel size={size}>
                  <MenuItem icon={FileText}>New File</MenuItem>
                  <MenuItem icon={Copy}>Copy</MenuItem>
                  <MenuItem icon={Settings}>Settings</MenuItem>
                </Menu>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 11. As links */}
      <div>
        <div style={sty.label}>As links (href rendering)</div>
        <div style={sty.demoArea}>
          <div style={sty.menuWrap}>
            <Menu panel>
              <MenuItem icon={User} href="#profile">Profile</MenuItem>
              <MenuItem icon={Settings} href="#settings">Settings</MenuItem>
              <MenuItem icon={Shield} href="#security">Security</MenuItem>
              <MenuItem icon={LogOut} href="#logout" variant="destructive">Log Out</MenuItem>
            </Menu>
          </div>
        </div>
      </div>

      {/* 12. Panel mode comparison */}
      <div>
        <div style={sty.label}>Panel vs. flat</div>
        <div style={sty.demoArea}>
          <div style={sty.row}>
            <div style={sty.menuWrap}>
              <div style={{ ...sty.label, marginBottom: '8px' }}>PANEL</div>
              <Menu panel>
                <MenuItem icon={FileText}>New File</MenuItem>
                <MenuItem icon={Copy}>Copy</MenuItem>
                <MenuItem icon={Settings}>Settings</MenuItem>
              </Menu>
            </div>
            <div style={sty.menuWrap}>
              <div style={{ ...sty.label, marginBottom: '8px' }}>FLAT (inline)</div>
              <Menu>
                <MenuItem icon={FileText}>New File</MenuItem>
                <MenuItem icon={Copy}>Copy</MenuItem>
                <MenuItem icon={Settings}>Settings</MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      {/* 13. Theme comparison */}
      <div>
        <div style={sty.label}>Theme Comparison</div>
        <div className="theme-comparison">
          <div data-theme="light" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>LIGHT</div>
            <Menu panel>
              <MenuItem icon={FileText} shortcut="Cmd+N">New File</MenuItem>
              <MenuItem icon={Copy} shortcut="Cmd+C">Copy</MenuItem>
              <MenuDivider />
              <MenuItem icon={Settings}>Settings</MenuItem>
              <MenuItem icon={Trash2} variant="destructive">Delete</MenuItem>
            </Menu>
          </div>
          <div data-theme="dark" style={{ padding: '20px', background: 'var(--color-bg-theme-panel)', borderRadius: '10px', border: '1px solid var(--color-border-default)' }}>
            <div style={{ fontSize: '10px', color: 'var(--color-text-secondary)', marginBottom: '12px', fontWeight: 500 }}>DARK</div>
            <Menu panel>
              <MenuItem icon={FileText} shortcut="Cmd+N">New File</MenuItem>
              <MenuItem icon={Copy} shortcut="Cmd+C">Copy</MenuItem>
              <MenuDivider />
              <MenuItem icon={Settings}>Settings</MenuItem>
              <MenuItem icon={Trash2} variant="destructive">Delete</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}
