// src/components/profile/Banner.tsx
import React, { useRef, useState, useEffect } from "react";
import './BannerEnhanced.css';

interface BannerProps {
  profileImage: string;
  name: string;
  country: string;
  countryFlag: string;
  hourlyRate: string;
}

const pencilIcon =
  "https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/79e8e73a137781124827e5ab59ebd63b20192040?placeholderIfAbsent=true";

const countryOptions = [
  { name: "Afghanistan", flag: "https://flagcdn.com/af.svg" },
  { name: "Albania", flag: "https://flagcdn.com/al.svg" },
  { name: "Algeria", flag: "https://flagcdn.com/dz.svg" },
  { name: "Andorra", flag: "https://flagcdn.com/ad.svg" },
  { name: "Angola", flag: "https://flagcdn.com/ao.svg" },
  { name: "Argentina", flag: "https://flagcdn.com/ar.svg" },
  { name: "Armenia", flag: "https://flagcdn.com/am.svg" },
  { name: "Australia", flag: "https://flagcdn.com/au.svg" },
  { name: "Austria", flag: "https://flagcdn.com/at.svg" },
  { name: "Azerbaijan", flag: "https://flagcdn.com/az.svg" },
  { name: "Bahamas", flag: "https://flagcdn.com/bs.svg" },
  { name: "Bahrain", flag: "https://flagcdn.com/bh.svg" },
  { name: "Bangladesh", flag: "https://flagcdn.com/bd.svg" },
  { name: "Barbados", flag: "https://flagcdn.com/bb.svg" },
  { name: "Belarus", flag: "https://flagcdn.com/by.svg" },
  { name: "Belgium", flag: "https://flagcdn.com/be.svg" },
  { name: "Belize", flag: "https://flagcdn.com/bz.svg" },
  { name: "Benin", flag: "https://flagcdn.com/bj.svg" },
  { name: "Bhutan", flag: "https://flagcdn.com/bt.svg" },
  { name: "Bolivia", flag: "https://flagcdn.com/bo.svg" },
  { name: "Botswana", flag: "https://flagcdn.com/bw.svg" },
  { name: "Brazil", flag: "https://flagcdn.com/br.svg" },
  { name: "Brunei", flag: "https://flagcdn.com/bn.svg" },
  { name: "Bulgaria", flag: "https://flagcdn.com/bg.svg" },
  { name: "Burkina Faso", flag: "https://flagcdn.com/bf.svg" },
  { name: "Burundi", flag: "https://flagcdn.com/bi.svg" },
  { name: "Cambodia", flag: "https://flagcdn.com/kh.svg" },
  { name: "Cameroon", flag: "https://flagcdn.com/cm.svg" },
  { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
  { name: "Chad", flag: "https://flagcdn.com/td.svg" },
  { name: "Chile", flag: "https://flagcdn.com/cl.svg" },
  { name: "China", flag: "https://flagcdn.com/cn.svg" },
  { name: "Colombia", flag: "https://flagcdn.com/co.svg" },
  { name: "Comoros", flag: "https://flagcdn.com/km.svg" },
  { name: "Congo", flag: "https://flagcdn.com/cg.svg" },
  { name: "Costa Rica", flag: "https://flagcdn.com/cr.svg" },
  { name: "Croatia", flag: "https://flagcdn.com/hr.svg" },
  { name: "Cuba", flag: "https://flagcdn.com/cu.svg" },
  { name: "Cyprus", flag: "https://flagcdn.com/cy.svg" },
  { name: "Czechia", flag: "https://flagcdn.com/cz.svg" },
  { name: "Denmark", flag: "https://flagcdn.com/dk.svg" },
  { name: "Djibouti", flag: "https://flagcdn.com/dj.svg" },
  { name: "Dominica", flag: "https://flagcdn.com/dm.svg" },
  { name: "Ecuador", flag: "https://flagcdn.com/ec.svg" },
  { name: "Egypt", flag: "https://flagcdn.com/eg.svg" },
  { name: "El Salvador", flag: "https://flagcdn.com/sv.svg" },
  { name: "Equatorial Guinea", flag: "https://flagcdn.com/gq.svg" },
  { name: "Eritrea", flag: "https://flagcdn.com/er.svg" },
  { name: "Estonia", flag: "https://flagcdn.com/ee.svg" },
  { name: "Eswatini", flag: "https://flagcdn.com/sz.svg" },
  { name: "Ethiopia", flag: "https://flagcdn.com/et.svg" },
  { name: "Fiji", flag: "https://flagcdn.com/fj.svg" },
  { name: "Finland", flag: "https://flagcdn.com/fi.svg" },
  { name: "France", flag: "https://flagcdn.com/fr.svg" },
  { name: "Gabon", flag: "https://flagcdn.com/ga.svg" },
  { name: "Gambia", flag: "https://flagcdn.com/gm.svg" },
  { name: "Georgia", flag: "https://flagcdn.com/ge.svg" },
  { name: "Germany", flag: "https://flagcdn.com/de.svg" },
  { name: "Ghana", flag: "https://flagcdn.com/gh.svg" },
  { name: "Greece", flag: "https://flagcdn.com/gr.svg" },
  { name: "Grenada", flag: "https://flagcdn.com/gd.svg" },
  { name: "Guatemala", flag: "https://flagcdn.com/gt.svg" },
  { name: "Guinea", flag: "https://flagcdn.com/gn.svg" },
  { name: "Guinea-Bissau", flag: "https://flagcdn.com/gw.svg" },
  { name: "Guyana", flag: "https://flagcdn.com/gy.svg" },
  { name: "Haiti", flag: "https://flagcdn.com/ht.svg" },
  { name: "Honduras", flag: "https://flagcdn.com/hn.svg" },
  { name: "Hungary", flag: "https://flagcdn.com/hu.svg" },
  { name: "Iceland", flag: "https://flagcdn.com/is.svg" },
  { name: "India", flag: "https://flagcdn.com/in.svg" },
  { name: "Indonesia", flag: "https://flagcdn.com/id.svg" },
  { name: "Iran", flag: "https://flagcdn.com/ir.svg" },
  { name: "Iraq", flag: "https://flagcdn.com/iq.svg" },
  { name: "Ireland", flag: "https://flagcdn.com/ie.svg" },
  { name: "Israel", flag: "https://flagcdn.com/il.svg" },
  { name: "Italy", flag: "https://flagcdn.com/it.svg" },
  { name: "Jamaica", flag: "https://flagcdn.com/jm.svg" },
  { name: "Japan", flag: "https://flagcdn.com/jp.svg" },
  { name: "Jordan", flag: "https://flagcdn.com/jo.svg" },
  { name: "Kazakhstan", flag: "https://flagcdn.com/kz.svg" },
  { name: "Kenya", flag: "https://flagcdn.com/ke.svg" },
  { name: "Kiribati", flag: "https://flagcdn.com/ki.svg" },
  { name: "Kuwait", flag: "https://flagcdn.com/kw.svg" },
  { name: "Kyrgyzstan", flag: "https://flagcdn.com/kg.svg" },
  { name: "Laos", flag: "https://flagcdn.com/la.svg" },
  { name: "Latvia", flag: "https://flagcdn.com/lv.svg" },
  { name: "Lebanon", flag: "https://flagcdn.com/lb.svg" },
  { name: "Lesotho", flag: "https://flagcdn.com/ls.svg" },
  { name: "Liberia", flag: "https://flagcdn.com/lr.svg" },
  { name: "Libya", flag: "https://flagcdn.com/ly.svg" },
  { name: "Liechtenstein", flag: "https://flagcdn.com/li.svg" },
  { name: "Lithuania", flag: "https://flagcdn.com/lt.svg" },
  { name: "Luxembourg", flag: "https://flagcdn.com/lu.svg" },
  { name: "Madagascar", flag: "https://flagcdn.com/mg.svg" },
  { name: "Malawi", flag: "https://flagcdn.com/mw.svg" },
  { name: "Malaysia", flag: "https://flagcdn.com/my.svg" },
  { name: "Maldives", flag: "https://flagcdn.com/mv.svg" },
  { name: "Mali", flag: "https://flagcdn.com/ml.svg" },
  { name: "Malta", flag: "https://flagcdn.com/mt.svg" },
  { name: "Marshall Islands", flag: "https://flagcdn.com/mh.svg" },
  { name: "Mauritania", flag: "https://flagcdn.com/mr.svg" },
  { name: "Mauritius", flag: "https://flagcdn.com/mu.svg" },
  { name: "Mexico", flag: "https://flagcdn.com/mx.svg" },
  { name: "Micronesia", flag: "https://flagcdn.com/fm.svg" },
  { name: "Moldova", flag: "https://flagcdn.com/md.svg" },
  { name: "Monaco", flag: "https://flagcdn.com/mc.svg" },
  { name: "Mongolia", flag: "https://flagcdn.com/mn.svg" },
  { name: "Montenegro", flag: "https://flagcdn.com/me.svg" },
  { name: "Morocco", flag: "https://flagcdn.com/ma.svg" },
  { name: "Mozambique", flag: "https://flagcdn.com/mz.svg" },
  { name: "Myanmar", flag: "https://flagcdn.com/mm.svg" },
  { name: "Namibia", flag: "https://flagcdn.com/na.svg" },
  { name: "Nauru", flag: "https://flagcdn.com/nr.svg" },
  { name: "Nepal", flag: "https://flagcdn.com/np.svg" },
  { name: "Netherlands", flag: "https://flagcdn.com/nl.svg" },
  { name: "New Zealand", flag: "https://flagcdn.com/nz.svg" },
  { name: "Nicaragua", flag: "https://flagcdn.com/ni.svg" },
  { name: "Niger", flag: "https://flagcdn.com/ne.svg" },
  { name: "Nigeria", flag: "https://flagcdn.com/ng.svg" },
  { name: "North Korea", flag: "https://flagcdn.com/kp.svg" },
  { name: "North Macedonia", flag: "https://flagcdn.com/mk.svg" },
  { name: "Norway", flag: "https://flagcdn.com/no.svg" },
  { name: "Oman", flag: "https://flagcdn.com/om.svg" },
  { name: "Pakistan", flag: "https://flagcdn.com/pk.svg" },
  { name: "Palau", flag: "https://flagcdn.com/pw.svg" },
  { name: "Panama", flag: "https://flagcdn.com/pa.svg" },
  { name: "Paraguay", flag: "https://flagcdn.com/py.svg" },
  { name: "Peru", flag: "https://flagcdn.com/pe.svg" },
  { name: "Philippines", flag: "https://flagcdn.com/ph.svg" },
  { name: "Poland", flag: "https://flagcdn.com/pl.svg" },
  { name: "Portugal", flag: "https://flagcdn.com/pt.svg" },
  { name: "Qatar", flag: "https://flagcdn.com/qa.svg" },
  { name: "Romania", flag: "https://flagcdn.com/ro.svg" },
  { name: "Russia", flag: "https://flagcdn.com/ru.svg" },
  { name: "Rwanda", flag: "https://flagcdn.com/rw.svg" },
  { name: "Samoa", flag: "https://flagcdn.com/ws.svg" },
  { name: "San Marino", flag: "https://flagcdn.com/sm.svg" },
  { name: "Saudi Arabia", flag: "https://flagcdn.com/sa.svg" },
  { name: "Senegal", flag: "https://flagcdn.com/sn.svg" },
  { name: "Serbia", flag: "https://flagcdn.com/rs.svg" },
  { name: "Seychelles", flag: "https://flagcdn.com/sc.svg" },
  { name: "Sierra Leone", flag: "https://flagcdn.com/sl.svg" },
  { name: "Singapore", flag: "https://flagcdn.com/sg.svg" },
  { name: "Slovakia", flag: "https://flagcdn.com/sk.svg" },
  { name: "Slovenia", flag: "https://flagcdn.com/si.svg" },
  { name: "Solomon Islands", flag: "https://flagcdn.com/sb.svg" },
  { name: "Somalia", flag: "https://flagcdn.com/so.svg" },
  { name: "South Africa", flag: "https://flagcdn.com/za.svg" },
  { name: "South Korea", flag: "https://flagcdn.com/kr.svg" },
  { name: "South Sudan", flag: "https://flagcdn.com/ss.svg" },
  { name: "Spain", flag: "https://flagcdn.com/es.svg" },
  { name: "Sri Lanka", flag: "https://flagcdn.com/lk.svg" },
  { name: "Sudan", flag: "https://flagcdn.com/sd.svg" },
  { name: "Suriname", flag: "https://flagcdn.com/sr.svg" },
  { name: "Sweden", flag: "https://flagcdn.com/se.svg" },
  { name: "Switzerland", flag: "https://flagcdn.com/ch.svg" },
  { name: "Syria", flag: "https://flagcdn.com/sy.svg" },
  { name: "Tajikistan", flag: "https://flagcdn.com/tj.svg" },
  { name: "Tanzania", flag: "https://flagcdn.com/tz.svg" },
  { name: "Thailand", flag: "https://flagcdn.com/th.svg" },
  { name: "Timor-Leste", flag: "https://flagcdn.com/tl.svg" },
  { name: "Togo", flag: "https://flagcdn.com/tg.svg" },
  { name: "Tonga", flag: "https://flagcdn.com/to.svg" },
  { name: "Tunisia", flag: "https://flagcdn.com/tn.svg" },
  { name: "Turkey", flag: "https://flagcdn.com/tr.svg" },
  { name: "Turkmenistan", flag: "https://flagcdn.com/tm.svg" },
  { name: "Tuvalu", flag: "https://flagcdn.com/tv.svg" },
  { name: "Uganda", flag: "https://flagcdn.com/ug.svg" },
  { name: "Ukraine", flag: "https://flagcdn.com/ua.svg" },
  { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
  { name: "United States", flag: "https://flagcdn.com/us.svg" },
  { name: "Uruguay", flag: "https://flagcdn.com/uy.svg" },
  { name: "Uzbekistan", flag: "https://flagcdn.com/uz.svg" },
  { name: "Vanuatu", flag: "https://flagcdn.com/vu.svg" },
  { name: "Vatican City", flag: "https://flagcdn.com/va.svg" },
  { name: "Venezuela", flag: "https://flagcdn.com/ve.svg" },
  { name: "Vietnam", flag: "https://flagcdn.com/vn.svg" },
  { name: "Yemen", flag: "https://flagcdn.com/ye.svg" },
  { name: "Zambia", flag: "https://flagcdn.com/zm.svg" },
  { name: "Zimbabwe", flag: "https://flagcdn.com/zw.svg" },
];

export const Banner: React.FC<BannerProps> = ({
  profileImage: initialProfileImage,
  name: initialName,
  country: initialCountry,
  countryFlag: initialCountryFlag,
  hourlyRate: initialHourlyRate,
}) => {
  const [profileImage, setProfileImage] = useState(initialProfileImage);
  const [name, setName] = useState(initialName);
  const [editingName, setEditingName] = useState(false);
  const [country, setCountry] = useState(initialCountry);
  const [countryFlag, setCountryFlag] = useState(initialCountryFlag);
  const [editingCountry, setEditingCountry] = useState(false);
  const [hourlyRate, setHourlyRate] = useState(initialHourlyRate);
  const [editingRate, setEditingRate] = useState(false);
  const [available, setAvailable] = useState(true);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const filteredCountryOptions = countryOptions.filter(opt => opt.name.toLowerCase().includes(countrySearch.toLowerCase()));
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const sel = countryOptions.find((o) => o.name === country);
    if (sel && sel.flag !== countryFlag) setCountryFlag(sel.flag);
  }, [country, countryFlag]);

  useEffect(() => {
    if (!editingCountry) {
      setShowCountryDropdown(false);
      setCountrySearch('');
    }
  }, [editingCountry]);

  const onProfileImageClick = () => fileInputRef.current?.click();
  const onProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => setProfileImage(ev.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const onNameEdit = () => setEditingName(true);
  const onNameSave = () => setEditingName(false);
  const onCountryEdit = () => setEditingCountry(true);
  const onCountrySave = () => setEditingCountry(false);
  const onRateEdit = () => setEditingRate(true);
  const onRateSave = () => setEditingRate(false);
  const onToggleAvailable = () => setAvailable((a) => !a);
  const onViewProfile = () => alert("Viewing public profile...");

  return (
    <div className="relative w-full max-w-[1442px] mx-auto bg-white">
      {/* Banner image and mobile profile image wrapper */}
      <div className="relative">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6d6775384ccd46a982a7cf80d05dc013/7a5b018cdc404864e7b280c9442739804aeba9ac?placeholderIfAbsent=true"
          alt="Banner"
          className="
            w-full
            h-auto          /* full height on mobile */
            sm:h-64         /* 256px on ≥640px */
            md:h-[265px]    /* 265px on ≥768px */
            object-cover object-top
          "
          draggable={false}
        />
        {/* Profile image + status (MOBILE ONLY) */}
        <div
          className="absolute left-4 bottom-[-32px] block md:hidden cursor-pointer group"
          style={{ zIndex: 10 }}
          onClick={onProfileImageClick}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="
              w-16 h-16
              sm:w-20 sm:h-20
              rounded-full border-2 border-[#1C7C04] object-cover
            "
          />
          <span
            className={`
              absolute bottom-0 right-0
              w-4 h-4 sm:w-5 sm:h-5
              border-2 border-white rounded-full
              transition-colors duration-200
              ${available ? 'bg-[#1C7C04]' : 'bg-gray-400'}
            `}
            title={available ? "Available" : "Unavailable"}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={onProfileImageChange}
          />
          <span className="
            absolute bottom-[2.5rem] left-0
            px-2 py-1 text-xs bg-black text-white rounded
            opacity-0 group-hover:opacity-100 transition-opacity
          ">
            Click to change
          </span>
        </div>
      </div>

      {/* Profile row (rest of content) */}
      <div
        className="
          flex flex-col items-start space-y-2 px-2 py-2 -mt-4
          md:absolute md:flex-row md:items-center md:space-x-28 md:space-y-0
          md:px-0 md:py-0 md:top-[280px] md:left-[120px] md:w-[1220px] md:h-[145px]
          bg-transparent md:bg-transparent
        "
      >
        {/* Profile image + status (DESKTOP ONLY) */}
        <div
          className="absolute hidden md:block md:left-0 md:top-4 md:transform md:-translate-y-1/2 md:translate-x-0 cursor-pointer group"
          style={{ zIndex: 10 }}
          onClick={onProfileImageClick}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="
              md:w-28 md:h-28
              rounded-full border-2 border-[#1C7C04] object-cover
            "
          />
          <span
            className={`
              absolute bottom-0 right-0 md:bottom-2 md:right-0
              md:w-6 md:h-6
              border-2 border-white rounded-full
              transition-colors duration-200
              ${available ? 'bg-[#1C7C04]' : 'bg-gray-400'}
            `}
            title={available ? "Available" : "Unavailable"}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
            onChange={onProfileImageChange}
          />
          <span className="
            absolute md:bottom-[-1.5rem] left-0
            px-2 py-1 text-xs bg-black text-white rounded
            opacity-0 group-hover:opacity-100 transition-opacity
          ">
            Click to change
          </span>
        </div>

        {/* Name & Country */}
        <div className="flex flex-col items-start space-y-2 pt-10 md:pt-0 mt-0 md:-mt-6 md:ml-20 md:pl-6 md:z-10 md:relative md:-top-2">
          {/* Name */}
          <div className="flex items-center w-full md:space-x-2">
            {editingName ? (
              <>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={onNameSave}
                  autoFocus
                  className="border border-gray-300 rounded px-2 py-1 text-lg font-bold"
                />
                <button
                  onClick={onNameSave}
                  className="text-green-600 font-semibold"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <div className="flex items-center space-x-2">
                  <span className="text-xl md:text-2xl font-bold text-[#1A011E]">
                    {name}
                  </span>
                  <img
                    src={pencilIcon}
                    alt="Edit"
                    onClick={onNameEdit}
                    className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:scale-110"
                  />
                </div>
              </>
            )}
          </div>

          {/* Country */}
          <div className="flex items-center space-x-2">
            {editingCountry ? (
              <div style={{ position: 'relative', minWidth: 200 }}>
                <button
                  className="country-select"
                  style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%', justifyContent: 'space-between', background: '#fff', fontWeight: 500 }}
                  onClick={() => setShowCountryDropdown((prev) => !prev)}
                  type="button"
                >
                  {countryFlag && (
                    <img src={countryFlag} alt={country} style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover' }} />
                  )}
                  <span style={{ flex: 1, textAlign: 'left', marginLeft: 8 }}>{country}</span>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="#6B047C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
                {showCountryDropdown && (
                  <div className="country-select-dropdown" style={{ width: '100%', left: 0, top: 38, animation: 'fadeInDropdown 0.18s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 220, paddingBottom: 12 }}>
                    <input
                      className="enhanced-input"
                      placeholder="Search country..."
                      autoFocus
                      value={countrySearch}
                      onChange={e => setCountrySearch(e.target.value)}
                      style={{ marginBottom: 8, width: '100%' }}
                    />
                    <div style={{ flex: 1, maxHeight: 160, overflowY: 'auto' }}>
                      {filteredCountryOptions.length === 0 ? (
                        <div style={{ padding: 12, color: '#aaa', fontStyle: 'italic' }}>No countries found</div>
                      ) : (
                        filteredCountryOptions.map(opt => (
                          <div
                            key={opt.name}
                            className={`enhanced-country-option${country === opt.name ? ' selected' : ''}`}
                            style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', padding: '8px 12px' }}
                            tabIndex={0}
                            onClick={() => { setCountry(opt.name); setCountryFlag(opt.flag); setShowCountryDropdown(false); onCountrySave(); }}
                            onKeyDown={e => { if (e.key === 'Enter') { setCountry(opt.name); setCountryFlag(opt.flag); setShowCountryDropdown(false); onCountrySave(); } }}
                          >
                            <img src={opt.flag} alt={opt.name} style={{ width: 22, height: 22, borderRadius: '50%' }} />
                            <span style={{ flex: 1 }}>{opt.name}</span>
                            {country === opt.name && (
                              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#6B047C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                    <div style={{ display: 'flex', gap: 10, justifyContent: 'space-between', marginTop: 10 }}>
                      <button
                        className="bg-[#6B047C] text-white px-4 py-1 rounded hover:bg-[#5a0368] font-semibold w-1/2"
                        onClick={() => { onCountrySave(); setShowCountryDropdown(false); }}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-200 text-black px-4 py-1 rounded hover:bg-gray-300 font-semibold w-1/2"
                        onClick={() => { setShowCountryDropdown(false); }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <span className="font-semibold text-[#1A011E]">
                  Country:
                </span>
                {countryFlag && (
                  <img
                    src={countryFlag}
                    alt={country}
                    className="w-5 h-5 md:w-6 md:h-6 rounded-full object-cover"
                  />
                )}
                <span className="text-[#666] font-semibold">
                  {country}
                </span>
                <img
                  src={pencilIcon}
                  alt="Edit country"
                  onClick={onCountryEdit}
                  className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:scale-110"
                />
              </>
            )}
          </div>
        </div>

        {/* Hourly rate - MOBILE ONLY (show above availability) */}
        <div className="flex flex-col items-start space-y-1 md:hidden md:mt-4 md:ml-auto">
          <span className="font-semibold text-lg text-[#1A011E]">
            Hourly rate
          </span>
          <div className="flex items-center space-x-2">
            {editingRate ? (
              <>
                <input
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(e.target.value)}
                  onBlur={onRateSave}
                  autoFocus
                  className="border border-gray-300 rounded px-2 py-1 w-20 text-center"
                />
                <button
                  onClick={onRateSave}
                  className="text-green-600 font-semibold"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="text-lg">
                  ${hourlyRate.replace(/^\$+/, "")}
                </span>
                <img
                  src={pencilIcon}
                  alt="Edit rate"
                  onClick={onRateEdit}
                  className="w-5 h-5 cursor-pointer hover:scale-110"
                />
              </>
            )}
          </div>
        </div>

        {/* Availability */}
        <div className="flex flex-col items-start space-y-1 md:mt-4 md:ml-auto">
          <span className="font-semibold text-[#1A011E]">
            Availability:
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={onToggleAvailable}
              className={
                `
                relative w-10 h-5 rounded-full transition
                ${available ? "bg-[#1C7C04]" : "bg-gray-400"}
              `
              }
            >
              <span
                className={
                  `
                  absolute top-[2px] left-[2px] w-4 h-4 rounded-full bg-white shadow
                  transition-transform
                  ${available ? "translate-x-[20px]" : ""}
                  `
                }
              />
            </button>
            <span className={
              `font-semibold text-sm ${available ? "text-green-600" : "text-gray-400"}`
            }>
              {available ? "Available" : "Unavailable"}
            </span>
          </div>
          {/* Mobile only: View public profile button just below Availability */}
          <button
            onClick={onViewProfile}
            className="md:hidden mt-2 w-fit min-w-[90px] px-2 py-1 border-2 border-[#6B047C] text-[#6B047C] font-semibold rounded-lg bg-white hover:bg-[#f9f5fa] transition whitespace-nowrap text-sm shadow-sm"
          >
            View public profile
          </button>
        </div>

        {/* Hourly rate - DESKTOP ONLY */}
        <div className="hidden md:flex flex-col items-start space-y-1 md:mt-4 md:ml-auto">
          <span className="font-semibold text-lg text-[#1A011E]">
            Hourly rate
          </span>
          <div className="flex items-center space-x-2">
            {editingRate ? (
              <>
                <input
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(e.target.value)}
                  onBlur={onRateSave}
                  autoFocus
                  className="border border-gray-300 rounded px-2 py-1 w-20 text-center"
                />
                <button
                  onClick={onRateSave}
                  className="text-green-600 font-semibold"
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span className="text-lg">
                  ${hourlyRate.replace(/^\$+/, "")}
                </span>
                <img
                  src={pencilIcon}
                  alt="Edit rate"
                  onClick={onRateEdit}
                  className="w-5 h-5 cursor-pointer hover:scale-110"
                />
              </>
            )}
          </div>
        </div>

        {/* View public profile */}
        <button
          onClick={onViewProfile}
          className="
            mt-4 md:mt-0 px-4 py-2 border-2 border-[#6B047C] text-[#6B047C]
            font-semibold rounded-lg bg-white hover:bg-[#f9f5fa] transition
            whitespace-nowrap
            w-full max-w-xs mx-auto flex justify-center md:w-auto md:justify-start md:ml-auto
            text-base md:text-lg shadow-sm
            hidden md:flex
          "
        >
          View public profile
        </button>
      </div>
    </div>
  );
};
