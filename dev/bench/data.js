window.BENCHMARK_DATA = {
  "lastUpdate": 1778423422572,
  "repoUrl": "https://github.com/parthdagia05/besu",
  "entries": {
    "Besu EVM JMH Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "committer": {
            "name": "Parth Dagia",
            "username": "parthdagia05",
            "email": "parth.24bcs10414@sst.scaler.com"
          },
          "id": "5d8ea2078737cb378345e9aac612afd5586e048c",
          "message": "Drop V2 suffix from shift-op regex for symmetric v1/v2 comparison\n\nSigned-off-by: Parth Dagia <parth.24bcs10414@sst.scaler.com>",
          "timestamp": "2026-05-10T14:14:25Z",
          "url": "https://github.com/parthdagia05/besu/commit/5d8ea2078737cb378345e9aac612afd5586e048c"
        },
        "date": 1778423421206,
        "tool": "jmh",
        "benches": [
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.AddOperationBenchmark.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 90.58928114729122,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.AddOperationBenchmarkV2.executeOperation ( {\"caseName\":\"ADD_RANDOM_RANDOM\"} )",
            "value": 12.14622350965571,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.SarOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 78.99238450376718,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.SarOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 17.725489977137073,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShlOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 71.36304731849236,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShlOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 9.012773651796087,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.ShrOperationBenchmark.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 68.44871363595266,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          },
          {
            "name": "org.hyperledger.besu.ethereum.vm.operations.v2.ShrOperationBenchmarkV2.executeOperation ( {\"scenario\":\"FULL_RANDOM\"} )",
            "value": 10.25256206863467,
            "unit": "ns/op",
            "extra": "iterations: 5\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}
