var browsers;
var media;
var utilities;
var runtimes;
var compression;
var documents;

browsers = [{
		"id": "bro",
		"title": "Web Browsers",
		"desc": "Web Browsers",
		"url": "",
		"open": true,
		"data": [{
			"id": "1",
			"title": "Chrome",
			"desc": "Fast Browser by Google",
			"url": "chrome",
			"icon": "chrome"
		}, {
			"id": "3",
			"title": "Opera Chromium",
			"desc": "Alternative Browser",
			"url": "operaChromium",
			"icon": "operaChromium"
		}, {
			"id": "2",
			"title": "Opera 12",
			"desc": "Legacy Alternative Browser 12.17",
			"url": "opera",
			"icon": "opera"	
		}, {
			"id": "4",
			"title": "Firefox",
			"desc": "Extensible Browser",
			"url": "firefox",
			"icon": "firefox"
		}, {
			"id": "5",
			"title": "Firefox ESR",
			"desc": "Firefox Extended Support Release 60",
			"url": "firefoxesr",
			"icon": "firefoxesr"
		}, {
			"id": "201",
			"title": "Firefox ESR 52",
			"desc": "Firefox Extended Support Release 52",
			"url": "firefoxesr52",
			"icon": "firefoxesr"	
		}, {
			"id": "202",
			"title": "Firefox ESR 45",
			"desc": "Firefox Extended Support Release 45",
			"url": "firefoxesr45",
			"icon": "firefoxesr"
		}, {
			"id": "203",
			"title": "Firefox ESR 38",
			"desc": "Firefox Extended Support Release 38",
			"url": "firefoxesr38",
			"icon": "firefoxesr"
		}, {
			"id": "204",
			"title": "Firefox ESR 31",
			"desc": "Firefox Extended Support Release 31",
			"url": "firefoxesr31",
			"icon": "firefoxesr"
		}, {
			"id": "205",
			"title": "Firefox ESR 24",
			"desc": "Firefox Extended Support Release 24",
			"url": "firefoxesr24",
			"icon": "firefoxesr"	
		}, {
			"id": "206",
			"title": "Firefox ESR 17",
			"desc": "Firefox Extended Support Release 17",
			"url": "firefoxesr17",
			"icon": "firefoxesr"
		}, {
			"id": "207",
			"title": "Firefox ESR 10",
			"desc": "Firefox Extended Support Release 10",
			"url": "firefoxesr10",
			"icon": "firefoxesr"		
		}]
	},	{
		"id": "sha",
		"title": "File Sharing",
		"desc": "File Sharing",
		"url": "",
		"open": true,
		"data": [{
			"id": "84",
			"title": "qBittorrent",
			"desc": "Free Bittorrent Client",
			"url": "qbittorrent",
			"icon": "qbittorrent"
		}, {
			"id": "85",
			"title": "uTorrent",
			"desc": "BitTorrent Client",
			"url": "utorrent",
			"icon": "utorrent"
		}]
	},	{
		"id": "oth",
		"title": "Other",
		"desc": "Other",
		"url": "",
		"open": true,
		"data": [{
			"id": "93",
			"title": "Evernote",
			"desc": "Online Notes",
			"url": "evernote",
			"icon": "evernote"
		}, {
			"id": "94",
			"title": "Google Earth",
			"desc": "Online Atlas by Google",
			"url": "googleearth",
			"icon": "googleearth"
		}, {
			"id": "95",
			"title": "Steam",
			"desc": "App Store for Games",
			"url": "steam",
			"icon": "steam"
		}, {
			"id": "96",
			"title": "KeePass",
			"desc": "Password Manager Classic",
			"url": "keepass",
			"icon": "keepass"
		}, {
			"id": "97",
			"title": "KeePass 2",
			"desc": "Password Manager",
			"url": "keepass2",
			"icon": "keepass2"
		}, {
			"id": "98",
			"title": "Everything",
			"desc": "Local File Search Engine",
			"url": "everything",
			"icon": "everything"
		}, {
			"id": "99",
			"title": "NV Access",
			"desc": "Screen Reader",
			"url": "nvda",
			"icon": "nvda"
		}]
	}
];

utilities = [{
		"id": "uti",
		"title": "Utilities",
		"desc": "Utilities",
		"url": "",
		"open": true,
		"data": [{
			"id": "100",
			"title": "TeamViewer",
			"desc": "Remote Access Tool",
			"url": "teamviewer",
			"icon": "teamviewer"
		}, {
			"id": "101",
			"title": "ImgBurn",
			"desc": "Disc Burner",
			"url": "imgburn",
			"icon": "imgburn"
		}, {
			"id": "102",
			"title": "RealVNC",
			"desc": "RealVNC Remote Access",
			"url": "realvnc",
			"icon": "realvnc"
		}, {
			"id": "103",
			"title": "TeraCopy",
			"desc": "Better File Copy",
			"url": "teracopy",
			"icon": "teracopy"
		}, {
			"id": "104",
			"title": "CDBurnerXP",
			"desc": "Disc Burner (requires .NET)",
			"url": "cdburnerxp",
			"icon": "cdburnerxp"
		}, {
			"id": "105",
			"title": "Revo",
			"desc": "App Uninstaller/Reverse",
			"url": "revo",
			"icon": "revo"
		}, {
			"id": "106",
			"title": "Launchy",
			"desc": "Hotkey Launcher",
			"url": "launchy",
			"icon": "launchy"
		}, {
			"id": "107",
			"title": "WinDirStat",
			"desc": "Directory Statistics",
			"url": "windirstat",
			"icon": "windirstat"
		}, {
			"id": "108",
			"title": "Glary",
			"desc": "System Utilities",
			"url": "glary",
			"icon": "glary"
		}, {
			"id": "109",
			"title": "InfraRecorder",
			"desc": "Disc Burner",
			"url": "infrarecorder",
			"icon": "infrarecorder"
		}, {
			"id": "110",
			"title": "Classic Start",
			"desc": "Classic Shell Win8 Start Menu",
			"url": "classicstart",
			"icon": "classicstart"
		}]
	},

	{
		"id": "too",
		"title": "Developer Tools",
		"desc": "Developer Tools",
		"url": "",
		"open": true,
		"data": [{
			"id": "114",
			"title": "Python",
			"desc": "Great Programming Language 2.7.16",
			"url": "python",
			"icon": "python"
		}, {
			"id": "115",
			"title": "FileZilla",
			"desc": "FTP Client",
			"url": "filezilla",
			"icon": "filezilla"
		}, {
			"id": "116",
			"title": "Notepad++",
			"desc": "Programmer's Editor",
			"url": "notepadplusplus",
			"icon": "notepadplusplus"
		}, {
			"id": "119",
			"title": "JDK",
			"desc": "Java Development Kit 8u181-b13",
			"url": "jdk",
			"icon": "jdk"
		}, {
			"id": "120",
			"title": "JDK x64",
			"desc": "Java Development Kit 8u181-b13",
			"url": "jdkx",
			"icon": "jdkx"
		}, {
			"id": "117",
			"title": "JDK 8",
			"desc": "Java Development Kit 8u181-b13",
			"url": "jdk8",
			"icon": "jdk8"
		}, {
			"id": "118",
			"title": "JDK x64 8",
			"desc": "Java Development Kit 8u181-b13",
			"url": "jdkx8",
			"icon": "jdkx8"
		}, {
			"id": "121",
			"title": "JDK 6",
			"desc": "Java Development Kit 6u45-b06",
			"url": "jdk6",
			"icon": "jdk6"
		}, {
			"id": "122",
			"title": "WinSCP",
			"desc": "SCP Client",
			"url": "winscp",
			"icon": "winscp"
		}, {
			"id": "123",
			"title": "PuTTY",
			"desc": "SSH client",
			"url": "putty",
			"icon": "putty"
		}, {
			"id": "124",
			"title": "WinMerge",
			"desc": "Compare and Merge Files",
			"url": "winmerge",
			"icon": "winmerge"
		}, {
			"id": "125",
			"title": "Eclipse",
			"desc": "IDE for Java (requires Java)",
			"url": "eclipse",
			"icon": "eclipse"
		}, {
			"id": "126",
			"title": "Visual Studio Code",
			"desc": "Programmer's Editor",
			"url": "vscode",
			"icon": "vscode"
		}]
	}
];

media = [

	{
		"id": "med",
		"title": "Media",
		"desc": "Media",
		"url": "",
		"open": true,
		"data": [{
			"id": "13",
			"title": "iTunes",
			"desc": "Music/Media Manager",
			"url": "itunes",
			"icon": "itunes"
		}, {
			"id": "14",
			"title": "VLC",
			"desc": "Great Video Player",
			"url": "vlc",
			"icon": "vlc"
		}, {
			"id": "15",
			"title": "AIMP",
			"desc": "Music Player",
			"url": "aimp",
			"icon": "aimp"
		}, {
			"id": "16",
			"title": "foobar2000",
			"desc": "Music Player",
			"url": "foobar",
			"icon": "foobar"
		}, {
			"id": "17",
			"title": "Winamp",
			"desc": "Music Player",
			"url": "winamp",
			"icon": "winamp"
		}, {
			"id": "18",
			"title": "MusicBee",
			"desc": "Music Manager & Player",
			"url": "musicbee",
			"icon": "musicbee"
		}, {
			"id": "19",
			"title": "Audacity",
			"desc": "Audio Editor",
			"url": "audacity",
			"icon": "audacity"
		}, {
			"id": "20",
			"title": "K-Lite Codecs",
			"desc": "Video decoders plus Media Player Classic",
			"url": "klitecodecs",
			"icon": "klitecodecs"
		}, {
			"id": "21",
			"title": "GOM",
			"desc": "Video Player",
			"url": "gom",
			"icon": "gom"
		}, {
			"id": "22",
			"title": "Spotify",
			"desc": "Online Music Service",
			"url": "spotify",
			"icon": "spotify"
		}, {
			"id": "23",
			"title": "CCCP",
			"desc": "Video decoders plus MPC",
			"url": "cccp",
			"icon": "cccp"
		}, {
			"id": "24",
			"title": "MediaMonkey",
			"desc": "Music Organizer",
			"url": "mediamonkey",
			"icon": "mediamonkey"
		}, {
			"id": "25",
			"title": "QuickTime",
			"desc": "Video Player",
			"url": "quicktime",
			"icon": "quicktime"
		}, {
			"id": "26",
			"title": "HandBrake",
			"desc": "Convert Videos (requires .NET 4)",
			"url": "handbrake",
			"icon": "handbrake"
		}]
	}, {
		"id": "sec",
		"title": "Security",
		"desc": "Security",
		"url": "",
		"open": true,
		"data": [{
			"id": "76",
			"title": "Essentials",
			"desc": "Great Antivirus by Microsoft",
			"url": "essentials",
			"icon": "essentials"
		}, {
			"id": "77",
			"title": "Malwarebytes",
			"desc": "Malware Remover",
			"url": "malwarebytes",
			"icon": "malwarebytes"
		}, {
			"id": "78",
			"title": "Avast",
			"desc": "Avast Free Antivirus",
			"url": "avast",
			"icon": "avast"
		}, {
			"id": "79",
			"title": "AVG",
			"desc": "AVG Free Antivirus",
			"url": "avg",
			"icon": "avg"
		}, {
			"id": "80",
			"title": "Spybot",
			"desc": "Spyware Remover",
			"url": "spybot",
			"icon": "spybot"
		}, {
			"id": "81",
			"title": "Spybot 2",
			"desc": "Spyware Remover",
			"url": "spybot2",
			"icon": "spybot2"
		}, {
			"id": "82",
			"title": "Avira",
			"desc": "Avira Free Antivirus",
			"url": "avira",
			"icon": "avira"
		}, {
			"id": "83",
			"title": "Super",
			"desc": "SUPERAntiSpyware Free",
			"url": "super",
			"icon": "super"
		}]
	}

];

runtimes = [

	{
		"id": "run",
		"title": "Runtimes",
		"desc": "Runtimes",
		"url": "",
		"open": true,
		"data": [{
			"id": "27",
			"title": "Flash",
			"desc": "Flash Player for other browsers",
			"url": "flash",
			"icon": "flash"
		}, {
			"id": "28",
			"title": "Flash (IE)",
			"desc": "Flash Player for Internet Explorer",
			"url": "flashie",
			"icon": "flashie"
		}, {
			"id": "29",
			"title": "Flash (PPAPI)",
			"desc": "Flash Player for Opera and Chromium",
			"url": "flashppapi",
			"icon": "flashppapi"
		}, {
			"id": "30",
			"title": "Java",
			"desc": "Java Runtime Environment (JRE) 8u181-b13",
			"url": "java",
			"icon": "java"
		}, {
			"id": "31",
			"title": "Java x64",
			"desc": "64-bit Java Runtime (JRE) 8u181-b13",
			"url": "javax",
			"icon": "javax"
		}, {
			"id": "32",
			"title": "Java x64 10",
			"desc": "64-bit Java Runtime (JRE) 10.0.2",
			"url": "javax10",
			"icon": "javax10"
		}, {
			"id": "33",
			"title": "Java x64 9",
			"desc": "64-bit Java Runtime (JRE) 9.0.4",
			"url": "javax9",
			"icon": "javax9"
		}, {
			"id": "34",
			"title": "Java 7",
			"desc": "Java Runtime Environment (JRE) 7u79-b15",
			"url": "java7",
			"icon": "java7"
		}, {
			"id": "35",
			"title": "Java x64 7",
			"desc": "64-bit Java Runtime (JRE) 7u79-b15",
			"url": "javax7",
			"icon": "javax7"
		}, {
			"id": "36",
			"title": "Java 6",
			"desc": "Java Runtime Environment (JRE) 6u45-b06",
			"url": "java6",
			"icon": "java6"
		}, {
			"id": "37",
			"title": "Java x64 6",
			"desc": "64-bit Java Runtime (JRE) 6u45-b06",
			"url": "javax6",
			"icon": "javax6"
		}, {
			"id": "38",
			"title": ".NET 3.5",
			"desc": "Microsoft .NET 3.5 SP1",
			"url": ".net3.5",
			"icon": "net"
		}, {
			"id": "39",
			"title": ".NET 4",
			"desc": "Microsoft .NET 4.0.30319",
			"url": ".net4",
			"icon": "net4"
		}, {
			"id": "40",
			"title": ".NET 4.5",
			"desc": "Microsoft .NET 4.5.50709",
			"url": ".net4.5",
			"icon": "net45"
		}, {
			"id": "41",
			"title": ".NET 4.5.1",
			"desc": "Microsoft .NET 4.5.51641",
			"url": ".net4.5.1",
			"icon": "net451"
		}, {
			"id": "42",
			"title": ".NET 4.5.2",
			"desc": "Microsoft .NET 4.5.51650",
			"url": ".net4.5.2",
			"icon": "net452"
		}, {
			"id": "43",
			"title": ".NET 4.6",
			"desc": "Microsoft .NET 4.6.00081",
			"url": ".net4.6",
			"icon": "net46"
		}, {
			"id": "44",
			"title": ".NET 4.6.1",
			"desc": "Microsoft .NET 4.6.01055",
			"url": ".net4.6.1",
			"icon": "net461"
		}, {
			"id": "45",
			"title": ".NET 4.6.2",
			"desc": "Microsoft .NET 4.6.01590",
			"url": ".net4.6.2",
			"icon": "net462"
		}, {
			"id": "46",
			"title": ".NET 4.7",
			"desc": "Microsoft .NET 4.7.02053",
			"url": ".net4.7",
			"icon": "net47"
		}, {
			"id": "47",
			"title": ".NET 4.7.1",
			"desc": "Microsoft .NET 4.7.02558",
			"url": ".net4.7.1",
			"icon": "net471"
		}, {
			"id": "48",
			"title": ".NET 4.7.2",
			"desc": "Microsoft .NET 4.7.03062",
			"url": ".net4.7.2",
			"icon": "net472"
		}, {
			"id": "200",
			"title": ".NET 4.8",
			"desc": "Microsoft .NET 4.8.03761",
			"url": ".net4.8",
			"icon": "net472"			
		}, {
			"id": "49",
			"title": "Silverlight",
			"desc": "Microsoft Silverlight",
			"url": "silverlight",
			"icon": "silverlight"
		}, {
			"id": "50",
			"title": "Air",
			"desc": "Adobe Air",
			"url": "air",
			"icon": "air"
		}, {
			"id": "51",
			"title": "Shockwave",
			"desc": "Shockwave Player",
			"url": "shockwave",
			"icon": "shockwave"
		}]
	}

];

compression = [

	{
		"id": "com",
		"title": "Compression",
		"desc": "Compression",
		"url": "",
		"open": true,
		"data": [{
			"id": "111",
			"title": "7-Zip",
			"desc": "Great Compression App",
			"url": "7zip",
			"icon": "7zip"
		}, {
			"id": "112",
			"title": "PeaZip",
			"desc": "File Compression Tool",
			"url": "peazip",
			"icon": "peazip"
		}, {
			"id": "113",
			"title": "WinRAR",
			"desc": "Another Compression Tool (Trial)",
			"url": "winrar",
			"icon": "winrar"
		}]
	}, {
		"id": "ima",
		"title": "Imaging",
		"desc": "Imaging",
		"url": "",
		"open": true,
		"data": [{
			"id": "52",
			"title": "Krita",
			"desc": "Painting Program",
			"url": "krita",
			"icon": "krita"
		}, {
			"id": "53",
			"title": "Blender",
			"desc": "3D Creation Suite",
			"url": "blender",
			"icon": "blender"
		}, {
			"id": "54",
			"title": "Paint.NET",
			"desc": "Image Editor (requires .NET 4.5)",
			"url": "paint.net",
			"icon": "paintnet"
		}, {
			"id": "56",
			"title": "GIMP",
			"desc": "Open Source Image Editor",
			"url": "gimp",
			"icon": "gimp"
		}, {
			"id": "57",
			"title": "IrfanView",
			"desc": "Image Viewer",
			"url": "irfanview",
			"icon": "irfanview"
		}, {
			"id": "58",
			"title": "XnView",
			"desc": "Image Viewer",
			"url": "xnview",
			"icon": "xnview"
		}, {
			"id": "59",
			"title": "Inkscape",
			"desc": "Vector Graphics Editor",
			"url": "inkscape",
			"icon": "inkscape"
		}, {
			"id": "60",
			"title": "FastStone",
			"desc": "FastStone Image Viewer",
			"url": "faststone",
			"icon": "faststone"
		}, {
			"id": "61",
			"title": "Greenshot",
			"desc": "Screenshot Tool",
			"url": "greenshot",
			"icon": "greenshot"
		}, {
			"id": "62",
			"title": "ShareX",
			"desc": "Screenshot Uploader (requires .NET 4.5)",
			"url": "sharex",
			"icon": "sharex"
		}]
	}, {
		"id": "sto",
		"title": "Online Storage",
		"desc": "Online Storage",
		"url": "",
		"open": true,
		"data": [{
			"id": "86",
			"title": "Dropbox",
			"desc": "Great Online Backup/File Sync",
			"url": "dropbox",
			"icon": "dropbox"
		}, {
			"id": "87",
			"title": "Google Backup/Sync",
			"desc": "Online Backup/File Sync",
			"url": "googlebackupandsync",
			"icon": "googlebackupandsync"
		}, {
			"id": "88",
			"title": "Google Drive",
			"desc": "Online Backup/File Sync",
			"url": "googledrive",
			"icon": "googledrive"
		}, {
			"id": "89",
			"title": "Google Drive File Stream",
			"desc": "Google Drive File Stream (requires G Suite)",
			"url": "googledrivefilestream",
			"icon": "googledrivefilestream"
		}, {
			"id": "90",
			"title": "Mozy",
			"desc": "MozyHome Online Backup",
			"url": "mozy",
			"icon": "mozy"
		}, {
			"id": "91",
			"title": "OneDrive",
			"desc": "Online File Sync by Microsoft",
			"url": "onedrive",
			"icon": "onedrive"
		}, {
			"id": "92",
			"title": "SugarSync",
			"desc": "Online Backup/File Sync",
			"url": "sugarsync",
			"icon": "sugarsync"
		}]
	}

];

documents = [

	{
		"id": "doc",
		"title": "Documents",
		"desc": "Documents",
		"url": "",
		"open": true,
		"data": [{
			"id": "63",
			"title": "Foxit Reader",
			"desc": "Alternative PDF Reader",
			"url": "foxit",
			"icon": "foxit"
		}, {
			"id": "64",
			"title": "LibreOffice",
			"desc": "Free Office Suite 6.1.0 (JRE recommended)",
			"url": "libreoffice",
			"icon": "libreoffice"
		}, {
			// "id": "65",
			// "title": "Reader DC",
			// "desc": "Adobe PDF Reader 18.11.20055",
			// "url": "reader",
			// "icon": "reader"
		// }, {
			"id": "66",
			"title": "Reader 17",
			"desc": "Adobe PDF Reader 17",
			"url": "readerclassic",
			"icon": "readerclassic"
		}, {
			"id": "67",
			"title": "Reader 15",
			"desc": "Adobe PDF Reader 15",
			"url": "readerclassic2015",
			"icon": "readerclassic2015"
		}, {
			// "id": "68",
			// "title": "Reader 11",
			// "desc": "Adobe PDF Reader 11.0.23",
			// "url": "reader11",
			// "icon": "reader11"
		// }, {
			// "id": "69",
			// "title": "Reader 10",
			// "desc": "Adobe PDF Reader 10.1.16",
			// "url": "reader10",
			// "icon": "reader10"
		// }, {
			// "id": "70",
			// "title": "Reader 9",
			// "desc": "Adobe PDF Reader 9.5.5",
			// "url": "reader9",
			// "icon": "reader9"
		// }, {
			"id": "71",
			"title": "Acrobat Updates",
			"desc": "Acrobat Std/Pro Updates 9.x-2017",
			"url": "acrobat",
			"icon": "acrobat"
		}, {
			"id": "72",
			"title": "SumatraPDF",
			"desc": "Lightweight PDF Reader",
			"url": "sumatrapdf",
			"icon": "sumatrapdf"
		}, {
			"id": "73",
			"title": "CutePDF",
			"desc": "Print Documents as PDF Files",
			"url": "cutepdf",
			"icon": "cutepdf"
		}, {
			"id": "74",
			"title": "PDFCreator",
			"desc": "Print Documents as PDF Files",
			"url": "pdfcreator",
			"icon": "pdfcreator"
		}, {
			"id": "75",
			"title": "OpenOffice",
			"desc": "Free Office Suite (JRE recommended)",
			"url": "openoffice",
			"icon": "openoffice"
		}]
	}, {
		"id": "mes",
		"title": "Messaging",
		"desc": "Messaging",
		"url": "",
		"open": true,
		"data": [{
			"id": "6",
			"title": "Discord",
			"desc": "Voice and Text Chat",
			"url": "discord",
			"icon": "discord"
		}, {
			"id": "7",
			"title": "Skype",
			"desc": "Internet Telephone",
			"url": "skype",
			"icon": "skype"
		}, {
			"id": "8",
			"title": "Pidgin",
			"desc": "Multi-IM Client",
			"url": "pidgin",
			"icon": "pidgin"
		}, {
			// "id": "9",
			// "title": "Digsby",
			// "desc": "Multi-IM Client",
			// "url": "digsby",
			// "icon": "digsby"
		// }, {
			"id": "10",
			"title": "Thunderbird",
			"desc": "Email Reader by Mozilla",
			"url": "thunderbird",
			"icon": "thunderbird"
		}, {
			"id": "11",
			"title": "Thunderbird ESR",
			"desc": "Email Reader by Mozilla",
			"url": "thunderbirdesr",
			"icon": "thunderbirdesr"
		}, {
			"id": "12",
			"title": "Trillian",
			"desc": "Trillian IM",
			"url": "trillian",
			"icon": "trillian"
		}]
	}, {
		"id": "ext",
		"title": "Pro Extras",
		"desc": "Pro Extras",
		"url": "",
		"open": true,
		"data": [{
			"id": "127",
			"title": "WebEx",
			"desc": "WebEx Connect",
			"url": "webex",
			"icon": "webex"
		}, {
			"id": "128",
			"title": "Citrix Receiver",
			"desc": "Citrix Receiver",
			"url": "citrixreceiver",
			"icon": "citrixreceiver"
		}, {
			"id": "129",
			"title": "TweetDeck",
			"desc": "Twitter Client",
			"url": "tweetdeck",
			"icon": "tweetdeck"
		}, {
			"id": "130",
			"title": "GoToMeeting",
			"desc": "Online Meeting",
			"url": "gotomeeting",
			"icon": "gotomeeting"
		}, {
			"id": "131",
			"title": "LogMeIn",
			"desc": "Remote Access Free/Pro",
			"url": "logmein",
			"icon": "logmein"
		}]
	}

];
