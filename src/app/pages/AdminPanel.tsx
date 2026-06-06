import { useState, useEffect, useRef } from "react";
import { useContent } from "../../context/ContentContext";
import { SiteContent, defaultContent } from "../../data/defaultContent";

// ─── Auth ───────────────────────────────────────────────────────────────────
const ADMIN_USER = "yyinteriors";
const ADMIN_PASS = "yy@#$123";
const SESSION_KEY = "yy_admin_session";

// ─── Toast ──────────────────────────────────────────────────────────────────
function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 2800);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 9999,
        background: "#8C6A4A",
        color: "#F5F1EA",
        fontFamily: "'Inter', sans-serif",
        fontSize: "13px",
        fontWeight: 500,
        letterSpacing: "0.05em",
        padding: "14px 24px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
        borderLeft: "3px solid #D8CBB8",
        animation: "slideInToast 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {message}
    </div>
  );
}

// ─── Image Preview Field ──────────────────────────────────────────────────────
function ImageField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [preview, setPreview] = useState(value);
  const [valid, setValid] = useState(true);

  const handleChange = (v: string) => {
    onChange(v);
    setPreview(v);
  };

  return (
    <div style={{ marginBottom: "16px" }}>
      <label style={labelStyle}>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="https://..."
        style={inputStyle}
      />
      {preview && (
        <div
          style={{
            marginTop: "8px",
            width: "100%",
            height: "120px",
            overflow: "hidden",
            background: "#111",
            border: "1px solid rgba(140,106,74,0.2)",
          }}
        >
          <img
            src={preview}
            alt="preview"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={() => setValid(false)}
            onLoad={() => setValid(true)}
          />
          {!valid && (
            <div
              style={{
                color: "#8C6A4A",
                fontSize: "11px",
                padding: "4px 8px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Invalid image URL
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Shared styles ────────────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(140,106,74,0.25)",
  color: "#F5F1EA",
  fontFamily: "'Inter', sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  padding: "10px 14px",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  resize: "vertical",
  minHeight: "80px",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "10px",
  fontWeight: 500,
  letterSpacing: "0.2em",
  color: "#8C6A4A",
  marginBottom: "6px",
  textTransform: "uppercase",
};

const sectionTitleStyle: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "28px",
  fontWeight: 500,
  color: "#F5F1EA",
  marginBottom: "6px",
  letterSpacing: "0.04em",
};

const saveButtonStyle: React.CSSProperties = {
  background: "#8C6A4A",
  color: "#F5F1EA",
  border: "none",
  padding: "12px 32px",
  fontFamily: "'Inter', sans-serif",
  fontSize: "11px",
  fontWeight: 500,
  letterSpacing: "0.2em",
  cursor: "pointer",
  transition: "background 0.2s",
};

const cardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(140,106,74,0.2)",
  padding: "20px",
  marginBottom: "16px",
};

// ─── Field helpers ────────────────────────────────────────────────────────────
function Field({
  label,
  value,
  onChange,
  multiline = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
}) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label style={labelStyle}>{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={textareaStyle}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={inputStyle}
        />
      )}
    </div>
  );
}

// ─── Divider ─────────────────────────────────────────────────────────────────
function Divider() {
  return (
    <div
      style={{
        width: "100%",
        height: "1px",
        background: "rgba(140,106,74,0.2)",
        margin: "28px 0",
      }}
    />
  );
}

// ─── Section wrapper ─────────────────────────────────────────────────────────
function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "10px",
          fontWeight: 500,
          letterSpacing: "0.3em",
          color: "#8C6A4A",
          marginBottom: "4px",
        }}
      >
        CONTENT EDITOR
      </p>
      <h2 style={sectionTitleStyle}>{title}</h2>
      {subtitle && (
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            color: "rgba(245,241,234,0.45)",
            marginTop: "4px",
          }}
        >
          {subtitle}
        </p>
      )}
      <div style={{ width: "40px", height: "1px", background: "#8C6A4A", marginTop: "12px" }} />
    </div>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function HeroEditor({
  draft,
  onChange,
  onSave,
}: {
  draft: SiteContent;
  onChange: (d: SiteContent) => void;
  onSave: () => void;
}) {
  const h = draft.hero;
  const set = (key: keyof typeof h) => (v: string) =>
    onChange({ ...draft, hero: { ...h, [key]: v } });
  return (
    <div>
      <SectionHeader title="Hero Section" subtitle="Main landing screen content and CTA buttons" />
      <Field label="Eyebrow text" value={h.eyebrow} onChange={set("eyebrow")} />
      <Field label="Main heading" value={h.heading} onChange={set("heading")} />
      <Field label="Subheading" value={h.subheading} onChange={set("subheading")} multiline />
      <Field label="CTA Button 1" value={h.cta1} onChange={set("cta1")} />
      <Field label="CTA Button 2" value={h.cta2} onChange={set("cta2")} />
      <ImageField label="Background image URL" value={h.image} onChange={set("image")} />
      <Divider />
      <p style={{ ...labelStyle, marginBottom: "12px" }}>TRUST LINE ITEMS</p>
      {h.trustItems.map((item, i) => (
        <div key={i} style={{ marginBottom: "10px" }}>
          <label style={labelStyle}>Item {i + 1}</label>
          <input
            type="text"
            value={item}
            onChange={(e) => {
              const updated = h.trustItems.map((t, idx) => (idx === i ? e.target.value : t));
              onChange({ ...draft, hero: { ...h, trustItems: updated } });
            }}
            style={inputStyle}
          />
        </div>
      ))}
      <button style={saveButtonStyle} onClick={onSave}>SAVE CHANGES</button>
    </div>
  );
}

function NavigationEditor({
  draft,
  onChange,
  onSave,
}: {
  draft: SiteContent;
  onChange: (d: SiteContent) => void;
  onSave: () => void;
}) {
  const n = draft.navigation;
  const set = (key: keyof typeof n) => (v: string) =>
    onChange({ ...draft, navigation: { ...n, [key]: v } });
  return (
    <div>
      <SectionHeader title="Navigation" subtitle="Brand name and tagline shown in the top nav" />
      <Field label="Brand name" value={n.brandName} onChange={set("brandName")} />
      <Field label="Tagline" value={n.tagline} onChange={set("tagline")} />
      <button style={saveButtonStyle} onClick={onSave}>SAVE CHANGES</button>
    </div>
  );
}

function BrandStoryEditor({
  draft,
  onChange,
  onSave,
}: {
  draft: SiteContent;
  onChange: (d: SiteContent) => void;
  onSave: () => void;
}) {
  const bs = draft.brandStory;
  const set = (key: keyof typeof bs) => (v: string) =>
    onChange({ ...draft, brandStory: { ...bs, [key]: v } });

  const updateStat = (i: number, field: "number" | "label", v: string) => {
    const stats = bs.stats.map((s, idx) => (idx === i ? { ...s, [field]: v } : s));
    onChange({ ...draft, brandStory: { ...bs, stats } });
  };

  return (
    <div>
      <SectionHeader title="Brand Story" subtitle="About section with philosophy text and key stats" />
      <Field label="Eyebrow" value={bs.eyebrow} onChange={set("eyebrow")} />
      <Field label="Heading" value={bs.heading} onChange={set("heading")} />
      <Field label="Paragraph 1" value={bs.paragraph1} onChange={set("paragraph1")} multiline />
      <Field label="Paragraph 2" value={bs.paragraph2} onChange={set("paragraph2")} multiline />
      <Field label="Paragraph 3" value={bs.paragraph3} onChange={set("paragraph3")} multiline />
      <ImageField label="Section image" value={bs.image} onChange={set("image")} />
      <Divider />
      <p style={{ ...labelStyle, marginBottom: "16px", fontSize: "11px" }}>STATS</p>
      {bs.stats.map((s, i) => (
        <div
          key={i}
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "12px", marginBottom: "12px" }}
        >
          <div>
            <label style={labelStyle}>Number</label>
            <input
              type="text"
              value={s.number}
              onChange={(e) => updateStat(i, "number", e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Label</label>
            <input
              type="text"
              value={s.label}
              onChange={(e) => updateStat(i, "label", e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>
      ))}
      <button style={saveButtonStyle} onClick={onSave}>SAVE CHANGES</button>
    </div>
  );
}

function ArrayEditor<T extends { id: string }>({
  sectionTitle,
  sectionSubtitle,
  items,
  renderFields,
  createNew,
  onSave,
}: {
  sectionTitle: string;
  sectionSubtitle?: string;
  items: T[];
  renderFields: (item: T, onChange: (updated: T) => void) => React.ReactNode;
  createNew: () => T;
  onSave: (items: T[]) => void;
}) {
  const [localItems, setLocalItems] = useState<T[]>(items);
  const [editingId, setEditingId] = useState<string | null>(null);

  // keep in sync when parent resets
  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  const updateItem = (updated: T) => {
    setLocalItems((prev) => prev.map((it) => (it.id === updated.id ? updated : it)));
  };

  const deleteItem = (id: string) => {
    if (!window.confirm("Delete this item?")) return;
    const next = localItems.filter((it) => it.id !== id);
    setLocalItems(next);
    if (editingId === id) setEditingId(null);
  };

  const addNew = () => {
    const item = createNew();
    setLocalItems((prev) => [...prev, item]);
    setEditingId(item.id);
  };

  return (
    <div>
      <SectionHeader title={sectionTitle} subtitle={sectionSubtitle} />
      {localItems.map((item) => (
        <div key={item.id} style={cardStyle}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: editingId === item.id ? "16px" : "0",
            }}
          >
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "18px",
                color: "#F5F1EA",
              }}
            >
              {(item as any).title || (item as any).name || (item as any).client || (item as any).quote?.slice(0, 40) + "…"}
            </span>
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => setEditingId(editingId === item.id ? null : item.id)}
                style={{
                  background: "rgba(140,106,74,0.15)",
                  border: "1px solid rgba(140,106,74,0.35)",
                  color: "#D8CBB8",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  padding: "6px 14px",
                  cursor: "pointer",
                }}
              >
                {editingId === item.id ? "CLOSE" : "EDIT"}
              </button>
              <button
                onClick={() => deleteItem(item.id)}
                style={{
                  background: "rgba(180,60,60,0.1)",
                  border: "1px solid rgba(180,60,60,0.3)",
                  color: "#cc6666",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  padding: "6px 14px",
                  cursor: "pointer",
                }}
              >
                DELETE
              </button>
            </div>
          </div>
          {editingId === item.id && renderFields(item, updateItem)}
        </div>
      ))}

      <button
        onClick={addNew}
        style={{
          width: "100%",
          background: "transparent",
          border: "1px dashed rgba(140,106,74,0.4)",
          color: "#8C6A4A",
          fontFamily: "'Inter', sans-serif",
          fontSize: "11px",
          letterSpacing: "0.2em",
          padding: "14px",
          cursor: "pointer",
          marginBottom: "24px",
          transition: "all 0.2s",
        }}
      >
        + ADD NEW
      </button>

      <button style={saveButtonStyle} onClick={() => onSave(localItems)}>
        SAVE CHANGES
      </button>
    </div>
  );
}

function ProjectsEditor({
  draft,
  onChange,
  onSave,
}: {
  draft: SiteContent;
  onChange: (d: SiteContent) => void;
  onSave: () => void;
}) {
  return (
    <ArrayEditor
      sectionTitle="Projects"
      sectionSubtitle="Portfolio grid — each project links to its own detail page"
      items={draft.projects}
      createNew={() => ({
        id: `p${Date.now()}`,
        slug: `new-project-${Date.now()}`,
        title: "New Project",
        location: "Hyderabad, India",
        style: "Contemporary",
        category: "Residential Interiors",
        client: "Private Client",
        area: "",
        year: "2024",
        description: "",
        image: "",
        mainImage: "",
        images: ["", "", ""],
      })}
      renderFields={(item, onUpdate) => (
        <>
          <Field label="Title" value={item.title} onChange={(v) => onUpdate({ ...item, title: v })} />
          <Field label="URL Slug (e.g. modern-villa)" value={item.slug} onChange={(v) => onUpdate({ ...item, slug: v.toLowerCase().replace(/\s+/g, "-") })} />
          <Field label="Category" value={item.category} onChange={(v) => onUpdate({ ...item, category: v })} />
          <Field label="Location" value={item.location} onChange={(v) => onUpdate({ ...item, location: v })} />
          <Field label="Style" value={item.style} onChange={(v) => onUpdate({ ...item, style: v })} />
          <Field label="Client" value={item.client} onChange={(v) => onUpdate({ ...item, client: v })} />
          <Field label="Area (e.g. 2,800 sq ft)" value={item.area} onChange={(v) => onUpdate({ ...item, area: v })} />
          <Field label="Year" value={item.year} onChange={(v) => onUpdate({ ...item, year: v })} />
          <Field label="Description" value={item.description} onChange={(v) => onUpdate({ ...item, description: v })} multiline />
          <ImageField label="Thumbnail (grid view)" value={item.image} onChange={(v) => onUpdate({ ...item, image: v })} />
          <ImageField label="Hero image (detail page)" value={item.mainImage} onChange={(v) => onUpdate({ ...item, mainImage: v })} />
          <p style={{ ...labelStyle, marginTop: "16px", marginBottom: "12px" }}>GALLERY IMAGES (3)</p>
          {[0, 1, 2].map((i) => (
            <ImageField
              key={i}
              label={`Gallery image ${i + 1}`}
              value={(item.images || [])[i] || ""}
              onChange={(v) => {
                const imgs = [...(item.images || ["", "", ""])];
                imgs[i] = v;
                onUpdate({ ...item, images: imgs });
              }}
            />
          ))}
        </>
      )}
      onSave={(items) => {
        const updated = { ...draft, projects: items };
        onChange(updated);
        onSave();
      }}
    />
  );
}

function ArchitectureEditor({
  draft,
  onChange,
  onSave,
}: {
  draft: SiteContent;
  onChange: (d: SiteContent) => void;
  onSave: () => void;
}) {
  const a = draft.architecture;
  const set = (key: keyof typeof a) => (v: string) =>
    onChange({ ...draft, architecture: { ...a, [key]: v } });

  const updateStat = (i: number, field: "label" | "value", v: string) => {
    const stats = a.stats.map((s, idx) => (idx === i ? { ...s, [field]: v } : s));
    onChange({ ...draft, architecture: { ...a, stats } });
  };

  return (
    <div>
      <SectionHeader title="Architecture" subtitle="Spatial planning section with floor plan card" />
      <Field label="Eyebrow" value={a.eyebrow} onChange={set("eyebrow")} />
      <Field label="Heading line 1" value={a.heading1} onChange={set("heading1")} />
      <Field label="Heading line 2" value={a.heading2} onChange={set("heading2")} />
      <Field label="Body text" value={a.body} onChange={set("body")} multiline />
      <Divider />
      <p style={{ ...labelStyle, marginBottom: "16px" }}>STATS GRID</p>
      {a.stats.map((s, i) => (
        <div
          key={i}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}
        >
          <div>
            <label style={labelStyle}>Label</label>
            <input
              type="text"
              value={s.label}
              onChange={(e) => updateStat(i, "label", e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Value</label>
            <input
              type="text"
              value={s.value}
              onChange={(e) => updateStat(i, "value", e.target.value)}
              style={inputStyle}
            />
          </div>
        </div>
      ))}
      <Divider />
      <p style={{ ...labelStyle, marginBottom: "16px" }}>FLOATING CARD</p>
      <Field label="Card eyebrow" value={a.cardEyebrow} onChange={set("cardEyebrow")} />
      <Field label="Card title" value={a.cardTitle} onChange={set("cardTitle")} />
      <Field label="Card body" value={a.cardBody} onChange={set("cardBody")} multiline />
      <button style={saveButtonStyle} onClick={onSave}>SAVE CHANGES</button>
    </div>
  );
}

function ServicesEditor({
  draft,
  onChange,
  onSave,
}: {
  draft: SiteContent;
  onChange: (d: SiteContent) => void;
  onSave: () => void;
}) {
  return (
    <ArrayEditor
      sectionTitle="Services"
      sectionSubtitle="Horizontal auto-scrolling carousel cards"
      items={draft.services}
      createNew={() => ({
        id: `s${Date.now()}`,
        title: "New Service",
        description: "",
        image: "",
      })}
      renderFields={(item, onUpdate) => (
        <>
          <Field label="Title" value={item.title} onChange={(v) => onUpdate({ ...item, title: v })} />
          <Field label="Description" value={item.description} onChange={(v) => onUpdate({ ...item, description: v })} multiline />
          <ImageField label="Image URL" value={item.image} onChange={(v) => onUpdate({ ...item, image: v })} />
        </>
      )}
      onSave={(items) => {
        const updated = { ...draft, services: items };
        onChange(updated);
        onSave();
      }}
    />
  );
}

function PhilosophyEditor({
  draft,
  onChange,
  onSave,
}: {
  draft: SiteContent;
  onChange: (d: SiteContent) => void;
  onSave: () => void;
}) {
  const p = draft.philosophy;
  const set = (key: keyof typeof p) => (v: string) =>
    onChange({ ...draft, philosophy: { ...p, [key]: v } });

  const updatePillar = (i: number, field: "num" | "heading" | "body", v: string) => {
    const pillars = p.pillars.map((pl, idx) => (idx === i ? { ...pl, [field]: v } : pl));
    onChange({ ...draft, philosophy: { ...p, pillars } });
  };

  return (
    <div>
      <SectionHeader title="Philosophy" subtitle="Design intelligence section with pillars and image composition" />
      <Field label="Eyebrow" value={p.eyebrow} onChange={set("eyebrow")} />
      <Field label="Heading" value={p.heading} onChange={set("heading")} />
      <Field label="Heading secondary part" value={p.headingItalic} onChange={set("headingItalic")} />
      <ImageField label="Image 1 (main large)" value={p.image1} onChange={set("image1")} />
      <ImageField label="Image 2 (secondary small)" value={p.image2} onChange={set("image2")} />
      <Divider />
      <p style={{ ...labelStyle, marginBottom: "16px" }}>STAT CARD</p>
      <Field label="Stat number" value={p.statNumber} onChange={set("statNumber")} />
      <Field label="Stat label" value={p.statLabel} onChange={set("statLabel")} />
      <Field label="Stat description" value={p.statDescription} onChange={set("statDescription")} multiline />
      <Divider />
      <p style={{ ...labelStyle, marginBottom: "16px" }}>DESIGN PILLARS</p>
      {p.pillars.map((pillar, i) => (
        <div key={i} style={{ ...cardStyle, marginBottom: "16px" }}>
          <p style={{ ...labelStyle, marginBottom: "12px" }}>Pillar {i + 1}</p>
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "12px", marginBottom: "12px" }}>
            <div>
              <label style={labelStyle}>Number</label>
              <input
                type="text"
                value={pillar.num}
                onChange={(e) => updatePillar(i, "num", e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Heading</label>
              <input
                type="text"
                value={pillar.heading}
                onChange={(e) => updatePillar(i, "heading", e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>
          <label style={labelStyle}>Body</label>
          <textarea
            value={pillar.body}
            onChange={(e) => updatePillar(i, "body", e.target.value)}
            style={textareaStyle}
          />
        </div>
      ))}
      <button style={saveButtonStyle} onClick={onSave}>SAVE CHANGES</button>
    </div>
  );
}

function MaterialsEditor({
  draft,
  onChange,
  onSave,
}: {
  draft: SiteContent;
  onChange: (d: SiteContent) => void;
  onSave: () => void;
}) {
  return (
    <ArrayEditor
      sectionTitle="Materials"
      sectionSubtitle="Material & texture showcase grid"
      items={draft.materials}
      createNew={() => ({
        id: `m${Date.now()}`,
        name: "New Material",
        description: "",
        image: "",
      })}
      renderFields={(item, onUpdate) => (
        <>
          <Field label="Name" value={item.name} onChange={(v) => onUpdate({ ...item, name: v })} />
          <Field label="Description" value={item.description} onChange={(v) => onUpdate({ ...item, description: v })} />
          <ImageField label="Image URL" value={item.image} onChange={(v) => onUpdate({ ...item, image: v })} />
        </>
      )}
      onSave={(items) => {
        const updated = { ...draft, materials: items };
        onChange(updated);
        onSave();
      }}
    />
  );
}

function TestimonialsEditor({
  draft,
  onChange,
  onSave,
}: {
  draft: SiteContent;
  onChange: (d: SiteContent) => void;
  onSave: () => void;
}) {
  return (
    <ArrayEditor
      sectionTitle="Testimonials"
      sectionSubtitle="Client quotes grid"
      items={draft.testimonials}
      createNew={() => ({
        id: `t${Date.now()}`,
        quote: "New testimonial quote",
        client: "",
        project: "",
      })}
      renderFields={(item, onUpdate) => (
        <>
          <Field label="Quote" value={item.quote} onChange={(v) => onUpdate({ ...item, quote: v })} multiline />
          <Field label="Client name" value={item.client} onChange={(v) => onUpdate({ ...item, client: v })} />
          <Field label="Project" value={item.project} onChange={(v) => onUpdate({ ...item, project: v })} />
        </>
      )}
      onSave={(items) => {
        const updated = { ...draft, testimonials: items };
        onChange(updated);
        onSave();
      }}
    />
  );
}

function ProcessEditor({
  draft,
  onChange,
  onSave,
}: {
  draft: SiteContent;
  onChange: (d: SiteContent) => void;
  onSave: () => void;
}) {
  return (
    <ArrayEditor
      sectionTitle="Process"
      sectionSubtitle="Timeline stages"
      items={draft.process}
      createNew={() => ({
        id: `pr${Date.now()}`,
        number: "07",
        title: "New Stage",
        description: "",
      })}
      renderFields={(item, onUpdate) => (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "12px" }}>
            <div>
              <label style={labelStyle}>Number</label>
              <input
                type="text"
                value={item.number}
                onChange={(e) => onUpdate({ ...item, number: e.target.value })}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Title</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => onUpdate({ ...item, title: e.target.value })}
                style={inputStyle}
              />
            </div>
          </div>
          <div style={{ marginTop: "12px" }}>
            <Field label="Description" value={item.description} onChange={(v) => onUpdate({ ...item, description: v })} multiline />
          </div>
        </>
      )}
      onSave={(items) => {
        const updated = { ...draft, process: items };
        onChange(updated);
        onSave();
      }}
    />
  );
}

function ContactEditor({
  draft,
  onChange,
  onSave,
}: {
  draft: SiteContent;
  onChange: (d: SiteContent) => void;
  onSave: () => void;
}) {
  const c = draft.contact;
  const set = (key: keyof typeof c) => (v: string) =>
    onChange({ ...draft, contact: { ...c, [key]: v } });
  return (
    <div>
      <SectionHeader title="Contact" subtitle="Contact section eyebrow, heading, and info" />
      <Field label="Eyebrow" value={c.eyebrow} onChange={set("eyebrow")} />
      <Field label="Heading" value={c.heading} onChange={set("heading")} />
      <Field label="Subheading" value={c.subheading} onChange={set("subheading")} multiline />
      <Field label="Phone" value={c.phone} onChange={set("phone")} />
      <Field label="Email" value={c.email} onChange={set("email")} />
      <Field label="Address" value={c.address} onChange={set("address")} />
      <div style={{ margin: "24px 0 8px" }}>
        <Field label="Google Sheet Web App URL" value={c.googleSheetUrl} onChange={set("googleSheetUrl")} />
        <p style={{ fontSize: "11px", color: "#8C6A4A", letterSpacing: "0.04em", marginTop: "6px", lineHeight: 1.6 }}>
          The Google Apps Script Web App URL that receives form submissions and writes them to your Google Sheet.
        </p>
      </div>
      <button style={saveButtonStyle} onClick={onSave}>SAVE CHANGES</button>
    </div>
  );
}

function FooterEditor({
  draft,
  onChange,
  onSave,
}: {
  draft: SiteContent;
  onChange: (d: SiteContent) => void;
  onSave: () => void;
}) {
  const f = draft.footer;
  const set = (key: keyof typeof f) => (v: string) =>
    onChange({ ...draft, footer: { ...f, [key]: v } });
  return (
    <div>
      <SectionHeader title="Footer" subtitle="Footer branding and copyright text" />
      <Field label="Brand name" value={f.brandName} onChange={set("brandName")} />
      <Field label="Tagline" value={f.tagline} onChange={set("tagline")} />
      <Field label="Copyright" value={f.copyright} onChange={set("copyright")} />
      <button style={saveButtonStyle} onClick={onSave}>SAVE CHANGES</button>
    </div>
  );
}

function CtaEditor({
  draft,
  onChange,
  onSave,
}: {
  draft: SiteContent;
  onChange: (d: SiteContent) => void;
  onSave: () => void;
}) {
  const c = draft.cta;
  const set = (key: keyof typeof c) => (v: string) =>
    onChange({ ...draft, cta: { ...c, [key]: v } });
  const ps = draft.projectsSection;
  const setPs = (key: keyof typeof ps) => (v: string) =>
    onChange({ ...draft, projectsSection: { ...ps, [key]: v } });
  return (
    <div>
      <SectionHeader title="CTA Sections" subtitle="Text shown in all Call-To-Action banners across the site" />
      <Field label="Eyebrow" value={c.eyebrow} onChange={set("eyebrow")} />
      <Field label="Heading" value={c.heading} onChange={set("heading")} />
      <Field label="Heading secondary part" value={c.headingItalic} onChange={set("headingItalic")} />
      <Field label="Body text" value={c.body} onChange={set("body")} multiline />
      <Field label="Primary button" value={c.button1} onChange={set("button1")} />
      <Field label="Secondary button" value={c.button2} onChange={set("button2")} />
      <Divider />
      <SectionHeader title="Projects Section Header" subtitle="Heading and subtext above the projects grid" />
      <Field label="Eyebrow" value={ps.eyebrow} onChange={setPs("eyebrow")} />
      <Field label="Heading" value={ps.heading} onChange={setPs("heading")} />
      <Field label="Subtext" value={ps.subtext} onChange={setPs("subtext")} multiline />
      <button style={saveButtonStyle} onClick={onSave}>SAVE CHANGES</button>
    </div>
  );
}

// ─── Login Screen ──────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shaking, setShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      sessionStorage.setItem(SESSION_KEY, "1");
      onLogin();
    } else {
      setError("Invalid credentials");
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0F0F0F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background geometric pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "linear-gradient(rgba(140,106,74,1) 1px, transparent 1px), linear-gradient(90deg, rgba(140,106,74,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(140,106,74,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "420px",
          margin: "0 24px",
          background: "rgba(27,27,27,0.95)",
          border: "1px solid rgba(140,106,74,0.25)",
          padding: "52px 48px",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
          animation: shaking ? "shake 0.4s ease" : "none",
        }}
      >
        {/* Bronze corner accents */}
        <div
          style={{
            position: "absolute",
            top: "-1px",
            left: "-1px",
            width: "24px",
            height: "24px",
            borderTop: "2px solid #8C6A4A",
            borderLeft: "2px solid #8C6A4A",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-1px",
            right: "-1px",
            width: "24px",
            height: "24px",
            borderBottom: "2px solid #8C6A4A",
            borderRight: "2px solid #8C6A4A",
          }}
        />

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, transparent, #8C6A4A)",
              margin: "0 auto 20px",
            }}
          />
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "28px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              color: "#F5F1EA",
              margin: "0 0 6px",
            }}
          >
            YY INTERIORS
          </h1>
          <p
            style={{
              fontSize: "9px",
              fontWeight: 400,
              letterSpacing: "0.3em",
              color: "#8C6A4A",
              margin: 0,
            }}
          >
            CONTENT MANAGEMENT
          </p>
          <div
            style={{
              width: "32px",
              height: "1px",
              background: "#8C6A4A",
              margin: "16px auto 0",
            }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                color: "#8C6A4A",
                marginBottom: "8px",
              }}
            >
              USERNAME
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              style={{
                ...inputStyle,
                background: "rgba(255,255,255,0.03)",
                borderColor: error ? "rgba(180,80,80,0.5)" : "rgba(140,106,74,0.25)",
              }}
            />
          </div>

          <div style={{ marginBottom: "32px" }}>
            <label
              style={{
                display: "block",
                fontSize: "9px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                color: "#8C6A4A",
                marginBottom: "8px",
              }}
            >
              PASSWORD
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              style={{
                ...inputStyle,
                background: "rgba(255,255,255,0.03)",
                borderColor: error ? "rgba(180,80,80,0.5)" : "rgba(140,106,74,0.25)",
              }}
            />
          </div>

          {error && (
            <p
              style={{
                color: "#cc6666",
                fontSize: "12px",
                marginBottom: "16px",
                textAlign: "center",
                letterSpacing: "0.05em",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              background: "#8C6A4A",
              color: "#F5F1EA",
              border: "none",
              padding: "14px",
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.25em",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#7a5c3f")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#8C6A4A")}
          >
            ENTER STUDIO
          </button>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
        @keyframes slideInToast {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

// ─── Connection Editor (JSONBin.io) ───────────────────────────────────────────
function ConnectionEditor({ onToast }: { onToast: (msg: string) => void }) {
  const { syncStatus, refreshFromCloud } = useContent();
  const [testing, setTesting] = useState(false);

  const testConnection = async () => {
    setTesting(true);
    await refreshFromCloud();
    setTesting(false);
    onToast(syncStatus === "synced" ? "✓ Connected — JSONBin is reachable" : "✗ Connection failed — check Vercel env vars");
  };

  const statusColor = { idle: "#888", loading: "#8C6A4A", synced: "#4CAF50", error: "#e57373", "no-config": "#e57373" }[syncStatus];
  const statusLabel = { idle: "Checking…", loading: "Syncing…", synced: "Connected & synced", error: "Sync error — check Vercel env vars", "no-config": "VITE_JSONBIN_BIN_ID not set in environment" }[syncStatus];

  return (
    <div>
      <SectionHeader title="Cloud Connection" subtitle="Content syncs automatically via Vercel environment variables" />

      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "28px", padding: "12px 16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: statusColor, flexShrink: 0 }} />
        <span style={{ fontSize: "12px", color: "rgba(245,241,234,0.6)", letterSpacing: "0.05em" }}>{statusLabel}</span>
      </div>

      <div style={{ padding: "16px 20px", background: "rgba(140,106,74,0.06)", border: "1px solid rgba(140,106,74,0.2)", fontSize: "12px", lineHeight: 1.9, color: "rgba(245,241,234,0.55)", marginBottom: "24px" }}>
        <strong style={{ color: "#D8CBB8", display: "block", marginBottom: "8px" }}>Configuration is managed in Vercel:</strong>
        Vercel Dashboard → Project → Settings → Environment Variables<br /><br />
        <strong style={{ color: "#8C6A4A" }}>VITE_JSONBIN_BIN_ID</strong> — your JSONBin Bin ID (public)<br />
        <strong style={{ color: "#8C6A4A" }}>JSONBIN_MASTER_KEY</strong> — your JSONBin Master Key (server-only)<br /><br />
        <span style={{ color: "rgba(245,241,234,0.35)" }}>The Master Key is never exposed to the browser — all writes go through a secure server function.</span>
      </div>

      <button
        onClick={testConnection}
        disabled={testing}
        style={{ ...saveButtonStyle, opacity: testing ? 0.6 : 1 }}
      >
        {testing ? "CHECKING…" : "CHECK CONNECTION"}
      </button>
    </div>
  );
}

// ─── Nav items ────────────────────────────────────────────────────────────────
const navItems = [
  { id: "connection", icon: "◎", label: "Connection" },
  { id: "hero", icon: "⬛", label: "Hero" },
  { id: "navigation", icon: "◈", label: "Navigation" },
  { id: "brandStory", icon: "◎", label: "Brand Story" },
  { id: "projects", icon: "▦", label: "Projects" },
  { id: "architecture", icon: "◻", label: "Feature Section" },
  { id: "services", icon: "◈", label: "Services" },
  { id: "philosophy", icon: "◆", label: "Why Choose Us" },
  { id: "materials", icon: "▪", label: "Materials" },
  { id: "testimonials", icon: "❝", label: "Testimonials" },
  { id: "process", icon: "≡", label: "Process" },
  { id: "cta", icon: "▶", label: "CTA Sections" },
  { id: "contact", icon: "◉", label: "Contact" },
  { id: "footer", icon: "▼", label: "Footer" },
];

// ─── Main Admin Panel ─────────────────────────────────────────────────────────
export function AdminPanel() {
  const { content, syncStatus, updateContent, resetContent } = useContent();
  const [loggedIn, setLoggedIn] = useState(() => sessionStorage.getItem(SESSION_KEY) === "1");
  const [activeSection, setActiveSection] = useState("connection");
  const [draft, setDraft] = useState<SiteContent>(content);
  const [toast, setToast] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // Sync draft when content resets from outside
  useEffect(() => {
    setDraft(content);
  }, [content]);

  const handleSave = async () => {
    setSaving(true);
    const result = await updateContent(draft);
    setSaving(false);
    if (result.ok) {
      const hasConfig = !!localStorage.getItem(JSONBIN_ID_KEY);
      setToast(hasConfig ? "✓ Saved & synced — all visitors will see changes" : "✓ Saved locally — configure Connection to sync to all visitors");
    } else {
      setToast(`⚠ Saved locally but cloud sync failed: ${result.error}`);
    }
  };

  const handleReset = async () => {
    if (!window.confirm("Reset ALL content to defaults? This cannot be undone.")) return;
    setSaving(true);
    await resetContent();
    setSaving(false);
    setDraft(defaultContent);
    setToast("✓ Content reset to defaults");
  };

  const handleLogout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return <LoginScreen onLogin={() => setLoggedIn(true)} />;
  }

  const renderSection = () => {
    switch (activeSection) {
      case "connection":
        return <ConnectionEditor onToast={setToast} />;
      case "hero":
        return <HeroEditor draft={draft} onChange={setDraft} onSave={handleSave} />;
      case "navigation":
        return <NavigationEditor draft={draft} onChange={setDraft} onSave={handleSave} />;
      case "brandStory":
        return <BrandStoryEditor draft={draft} onChange={setDraft} onSave={handleSave} />;
      case "projects":
        return <ProjectsEditor draft={draft} onChange={setDraft} onSave={handleSave} />;
      case "architecture":
        return <ArchitectureEditor draft={draft} onChange={setDraft} onSave={handleSave} />;
      case "services":
        return <ServicesEditor draft={draft} onChange={setDraft} onSave={handleSave} />;
      case "philosophy":
        return <PhilosophyEditor draft={draft} onChange={setDraft} onSave={handleSave} />;
      case "materials":
        return <MaterialsEditor draft={draft} onChange={setDraft} onSave={handleSave} />;
      case "testimonials":
        return <TestimonialsEditor draft={draft} onChange={setDraft} onSave={handleSave} />;
      case "process":
        return <ProcessEditor draft={draft} onChange={setDraft} onSave={handleSave} />;
      case "cta":
        return <CtaEditor draft={draft} onChange={setDraft} onSave={handleSave} />;
      case "contact":
        return <ContactEditor draft={draft} onChange={setDraft} onSave={handleSave} />;
      case "footer":
        return <FooterEditor draft={draft} onChange={setDraft} onSave={handleSave} />;
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#0F0F0F",
        fontFamily: "'Inter', sans-serif",
        color: "#F5F1EA",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: rgba(140,106,74,0.3); }
        input:focus, textarea:focus { border-color: rgba(140,106,74,0.6) !important; }
        @keyframes slideInToast {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes savingBar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      {/* ── Sidebar ── */}
      <aside
        style={{
          width: "260px",
          minWidth: "260px",
          background: "#141414",
          borderRight: "1px solid rgba(140,106,74,0.15)",
          display: "flex",
          flexDirection: "column",
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
        }}
      >
        {/* Sidebar header */}
        <div
          style={{
            padding: "28px 24px 24px",
            borderBottom: "1px solid rgba(140,106,74,0.12)",
          }}
        >
          <p
            style={{
              fontSize: "9px",
              fontWeight: 500,
              letterSpacing: "0.3em",
              color: "#8C6A4A",
              margin: "0 0 6px",
            }}
          >
            YY INTERIORS
          </p>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: "#F5F1EA",
              margin: "0 0 2px",
            }}
          >
            Content Studio
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "2px" }}>
            <div style={{
              width: "6px", height: "6px", borderRadius: "50%", flexShrink: 0,
              background: { idle: "#555", loading: "#8C6A4A", synced: "#4CAF50", error: "#e57373", "no-config": "#555" }[syncStatus],
              boxShadow: syncStatus === "synced" ? "0 0 6px rgba(76,175,80,0.5)" : syncStatus === "loading" ? "0 0 6px rgba(140,106,74,0.5)" : "none",
            }} />
            <p style={{ fontSize: "11px", color: "rgba(245,241,234,0.35)", margin: 0 }}>
              {{ idle: "Not configured", loading: "Syncing…", synced: "Live — synced to cloud", error: "Sync error", "no-config": "Local only" }[syncStatus]}
            </p>
          </div>
        </div>

        {/* Nav items */}
        <nav style={{ flex: 1, padding: "16px 0" }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                width: "100%",
                padding: "11px 24px",
                background: activeSection === item.id ? "rgba(140,106,74,0.12)" : "transparent",
                border: "none",
                borderLeft:
                  activeSection === item.id
                    ? "2px solid #8C6A4A"
                    : "2px solid transparent",
                color: activeSection === item.id ? "#D8CBB8" : "rgba(245,241,234,0.45)",
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: activeSection === item.id ? 500 : 400,
                letterSpacing: "0.06em",
                cursor: "pointer",
                textAlign: "left",
                transition: "all 0.15s",
              }}
            >
              <span style={{ fontSize: "10px", opacity: 0.7 }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom actions */}
        <div
          style={{
            padding: "20px 24px",
            borderTop: "1px solid rgba(140,106,74,0.12)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "block",
              textAlign: "center",
              padding: "9px",
              background: "rgba(140,106,74,0.1)",
              border: "1px solid rgba(140,106,74,0.25)",
              color: "#D8CBB8",
              fontSize: "10px",
              letterSpacing: "0.18em",
              textDecoration: "none",
              transition: "all 0.15s",
            }}
          >
            VIEW SITE ↗
          </a>
          <button
            onClick={handleReset}
            style={{
              width: "100%",
              padding: "9px",
              background: "transparent",
              border: "1px solid rgba(180,60,60,0.3)",
              color: "rgba(180,100,100,0.8)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.18em",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            RESET DEFAULTS
          </button>
          <button
            onClick={handleLogout}
            style={{
              width: "100%",
              padding: "9px",
              background: "transparent",
              border: "none",
              color: "rgba(245,241,234,0.3)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.15em",
              cursor: "pointer",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,241,234,0.6)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,241,234,0.3)")}
          >
            LOGOUT
          </button>
        </div>
      </aside>

      {/* ── Main content ── */}
      <main
        style={{
          flex: 1,
          padding: "52px 60px",
          overflowY: "auto",
          maxWidth: "860px",
        }}
      >
        {renderSection()}
      </main>

      {saving && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #8C6A4A, transparent)", animation: "savingBar 1.2s ease-in-out infinite", zIndex: 9998 }} />
      )}
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
